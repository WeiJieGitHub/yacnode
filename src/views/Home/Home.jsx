import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'components/Container/Container';
import TopicList from 'components/TopicList/TopicList';
import { parse } from 'querystring';
import { fetchHomeTopics } from './HomeRedux';

export class Home extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    this.fetchData(search);
  }

  componentWillUpdate(nextProps) {
    const currentSearch = this.props.location.search;
    const nextSearch = nextProps.location.search;
    if (currentSearch !== nextSearch) {
      this.fetchData(nextSearch);
    }
  }

  fetchData(search) {
    const { page } = parse(search.slice(1));
    if (!isNaN(parseInt(page, 10))) {
      this.props.fetchTopics({ page });
    } else {
      this.props.fetchTopics({ page: 1 });
    }
  }

  render() {
    const { loadState, topics } = this.props;
    let result;
    if (loadState === 'READY') {
      result = (
        <Container>
          <TopicList topics={topics} />
        </Container>
      );
    } else {
      result = (
        <Container>
          <h2>{ loadState }</h2>
        </Container>
      );
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
};

export default connect(
  state => state.home,
  dispatch => ({ fetchTopics: bindActionCreators(fetchHomeTopics, dispatch) }),
)(Home);
