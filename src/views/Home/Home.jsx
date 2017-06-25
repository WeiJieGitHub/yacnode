import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'components/Container/Container';
import TopicList from 'components/TopicList/TopicList';
import Pagination from 'components/Pagination/Pagination';
import Loading from 'components/Loading/Loading';
import { parse } from 'querystring';
import getPaginationInfo from 'utils/getPaginationInfo';
import { fetchHomeTopics } from './HomeRedux';

export class Home extends Component {
  componentDidMount() {
    const { history } = this.props;
    const { search } = this.props.location;
    if (history.action === 'PUSH' || this.props.topics.length === 0) {
      this.fetchData(search);
    }
  }

  componentWillUpdate(nextProps) {
    const currentSearch = this.props.location.search;
    const nextSearch = nextProps.location.search;
    const { history } = this.props;
    if (currentSearch !== nextSearch && history.action === 'PUSH') {
      this.fetchData(nextSearch);
    }
  }

  fetchData(search) {
    const { page } = parse(search.slice(1));
    const params = isNaN(parseInt(page, 10)) ? { page: 1 } : { page };
    this.props.fetchTopics(params);
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

Home.propTypes = {
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
};

Home.defaultProps = {
  loadState: 'READY',
  fetchTopics: () => null,
  topics: [],
  location: {
    pathname: '',
    search: '',
    hash: '',
  },
  history: {
    action: '',
  },
};

export default connect(
  state => state.home,
  dispatch => ({ fetchTopics: bindActionCreators(fetchHomeTopics, dispatch) }),
)(Home);
