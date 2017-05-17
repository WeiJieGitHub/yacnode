import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'components/Container/Container';
import TopicList from 'components/TopicList/TopicList';
import { fetchGoodTopics } from './GoodRedux';

export class Good extends Component {
  componentDidMount() {
    this.props.fetchTopics();
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

Good.propTypes = {
  loadState: PropTypes.string.isRequired,
  fetchTopics: PropTypes.func,
  topics: PropTypes.arrayOf(PropTypes.object),
};

Good.defaultProps = {
  loadState: 'READY',
  fetchTopics: () => null,
  topics: [],
};

export default connect(
  state => state.good,
  dispatch => ({ fetchTopics: bindActionCreators(fetchGoodTopics, dispatch) }),
)(Good);
