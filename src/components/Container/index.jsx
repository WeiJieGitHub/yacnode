import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

function Container(props) {
  const { className } = props;

  return (
    <div styleName="container" className={`${className}`}>
      { props.children }
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Container.defaultProps = {
  children: null,
  className: '',
};

export default CSSModules(Container, styles);
