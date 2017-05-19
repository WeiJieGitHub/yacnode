import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import icons from 'styles/icons.scss';
import styles from './Pagination.scss';

function Pagination() {
  return (
    <div styleName="wrapper">
      <ul>
        <li styleName="item"><Link to="/"><i className={icons['icon-chevron-thin-left']} /> 上一页</Link></li>
        <li styleName="item"><Link to="/">1</Link></li>
        <li styleName="item"><Link to="/">下一页 <i className={icons['icon-chevron-thin-right']} /></Link></li>
      </ul>
    </div>
  );
}

Pagination.propTypes = {
};

Pagination.defaultProps = {
};

export default CSSModules(Pagination, styles);
