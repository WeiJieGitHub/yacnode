import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'components/Container/Container';
import TopicList from 'components/TopicList/TopicList';
import Pagination from 'components/Pagination/Pagination';
import Loading from 'components/Loading/Loading';
import ScrollTopManager from 'components/ScrollTopManager/ScrollTopManager';
import { parse } from 'querystring';
import getPaginationInfo from 'utils/getPaginationInfo';
import { debounce } from 'utils/utils';
import { saveScrollTop } from './TopicsRedux';

export class Topics extends Component {
  constructor(props) {
    super(props);

    this.onScroll = debounce(() => {
      const topValue = document.body.scrollTop;
      this.props.saveScrollTop(topValue);
    }, 50);
  }

  componentDidMount() {
    const { history } = this.props;
    const { search } = this.props.location;

    if (history.action === 'PUSH' || this.props.topics.length === 0) {
      this.fetchData(search);
    }
  }

  shouldComponentUpdate(nextProps) {
    const { location, history } = this.props;
    const nextLocation = nextProps.location;

    const path = `${location.pathname}${location.search}`;
    const nextPath = `${nextLocation.pathname}${nextLocation.search}`;
    switch (true) {
      case path !== nextPath && history.action === 'PUSH':
        this.fetchData(nextLocation.search, nextProps.request);
        return false;
      default:
        break;
    }
    return true;
  }

  fetchData(search, request = this.props.request) {
    const { page } = parse(search.slice(1));
    const params = isNaN(parseInt(page, 10)) ? { page: 1 } : { page };
    this.props.fetchTopics(request, params);
  }

  render() {
    const { loadState, topics, location } = this.props;
    const { page } = parse(location.search.slice(1));
    const paginationInfo = getPaginationInfo(page, topics.length);
    let result;
    if (loadState === 'READY') {
      result = (
        <Container>
          <TopicList topics={topics} prefix={`${location.pathname}`} />
          <Pagination {...paginationInfo} prefix={`${location.pathname}?page=`} />
        </Container>
      );
    } else {
      result = <Loading />;
    }
    return result;
  }
}

Topics.propTypes = {
  loadState: PropTypes.string.isRequired,
  fetchTopics: PropTypes.func,
  topics: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }),
  history: PropTypes.shape({
    action: PropTypes.string,
  }),
  request: PropTypes.func,
  saveScrollTop: PropTypes.func,
};

Topics.defaultProps = {
  loadState: 'READY',
  fetchTopics: () => null,
  request: () => null,
  topics: [],
  location: {
    pathname: '',
    search: '',
    hash: '',
  },
  history: {
    action: '',
  },
  saveScrollTop: () => null,
};

export default connect(
  state => state.topics,
  dispatch => ({ saveScrollTop: bindActionCreators(saveScrollTop, dispatch) }),
)(ScrollTopManager(Topics));
