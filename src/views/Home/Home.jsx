import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function Home(props) {
  const { title } = props.store;
  return (
    <div>
      <h1 data-role="home">{ title }</h1>
    </div>
  );
}

Home.propTypes = {
  store: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

Home.defaultProps = {
  store: {
    title: '',
  },
};

export default connect(state => ({ store: state.index }))(Home);
