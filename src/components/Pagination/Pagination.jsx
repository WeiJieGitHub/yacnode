import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import icons from 'styles/icons.scss';
import styles from './Pagination.scss';

function Pagination(props) {
  const { prefix, current, next, prev } = props;
  return (
    <div styleName="wrapper">
      <ul>
        <li styleName="item">
          {isNaN(prev) ? ' ' : <Link to={`${prefix + prev}`}><i className={icons['icon-chevron-thin-left']} /> 上一页</Link>}
        </li>
        <li styleName="item"><a>{current}</a></li>
        <li styleName="item">
          {isNaN(next) ? ' ' : <Link to={`${prefix + next}`}>下一页 <i className={icons['icon-chevron-thin-right']} /></Link>}
        </li>
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  prefix: PropTypes.string,
  current: PropTypes.number,
  next: PropTypes.number,
  prev: PropTypes.number,
};

Pagination.defaultProps = {
  prefix: '',
  current: 1,
  next: NaN,
  prev: NaN,
};

export default CSSModules(Pagination, styles);
