import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'components/Container/Container';
import { fetchHomeTopics } from './HomeRedux';

export class Home extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const { title, loadState } = this.props;
    return (
      <Container>
        <h1 data-role="home">{ title }</h1>
        <h2>{ loadState }</h2>
      </Container>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  loadState: PropTypes.string.isRequired,
  fetchTopics: PropTypes.func,
};

Home.defaultProps = {
  title: '',
  loadState: 'READY',
  fetchTopics: () => null,
};

export default connect(
  state => state.home,
  dispatch => ({ fetchTopics: bindActionCreators(fetchHomeTopics, dispatch) }),
)(Home);
