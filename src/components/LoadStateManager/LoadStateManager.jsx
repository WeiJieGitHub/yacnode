import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading/Loading';

export default (Wrapped) => {
  class LoadStateManager extends Wrapped {
    render() {
      if (this.props.loadState === 'READY') {
        return super.render();
      }
      return <Loading />;
    }
  }
  LoadStateManager.propTypes = {
    loadState: PropTypes.string,
  };
  LoadStateManager.defaultProps = {
    loadState: 'READY',
  };
  return LoadStateManager;
};
