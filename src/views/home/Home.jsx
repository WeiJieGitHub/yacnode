import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sub from 'components/Sub';
import style from './Home.scss';

export function Home(props) {
  const { title } = props.store;
  return (
    <div>
      <h1 className={style.title} data-role="home">{ title }</h1>
      <Sub />
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
