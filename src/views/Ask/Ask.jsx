import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'components/Container/Container';
import TopicList from 'components/TopicList/TopicList';
import { fetchAskTopics } from './AskRedux';

export class Ask extends Component {
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

Ask.propTypes = {
  loadState: PropTypes.string.isRequired,
  fetchTopics: PropTypes.func,
  topics: PropTypes.arrayOf(PropTypes.object),
};

Ask.defaultProps = {
  loadState: 'READY',
  fetchTopics: () => null,
  topics: [],
};

export default connect(
  state => state.ask,
  dispatch => ({ fetchTopics: bindActionCreators(fetchAskTopics, dispatch) }),
)(Ask);
