import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sub from 'components/Sub';
import style from './Index.scss';

function Index(props) {
  const { title } = props.store;
  return (
    <div>
      <h1 className={style.title} data-role="title">{ title }</h1>
      <Sub />
    </div>
  );
}

Index.propTypes = {
  store: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

Index.defaultProps = {
  store: {
    title: '',
  },
};

export { Index };
export default connect(state => ({ store: state.index }))(Index);
