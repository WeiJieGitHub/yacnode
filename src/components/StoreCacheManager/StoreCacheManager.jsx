import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push, pop, saveToLocal } from 'components/StoreCacheManager/StoreCacheManagerRedux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default (Wrapped) => {
  class StoreCacheManager extends Component {
    constructor(props) {
      super(props);
      const { historyCachePush, historyCachePop, history, saveHistoryCacheToLocal } = this.props;
      const prevKey = `${history.location.pathname}${history.location.search}`;
      historyCachePop(prevKey);
      this.beforeunload = () => {
        historyCachePush(prevKey);
        saveHistoryCacheToLocal('historyCache');
      };
    }

    componentDidMount() {
      window.addEventListener('beforeunload', this.beforeunload);
    }

    componentWillUpdate(nextProps) {
      const { historyCachePush, historyCachePop, location } = this.props;
      const path = `${location.pathname}${location.search}`;
      const nextPath = `${nextProps.location.pathname}${nextProps.location.search}`;

      if (path !== nextPath) {
        historyCachePush(path);
        if (nextProps.history.action === 'POP') {
          historyCachePop(nextPath);
        }
      }
    }

    componentWillUnmount() {
      window.removeEventListener('beforeunload', this.beforeunload);
    }

    render() {
      return <Wrapped {...this.props} />;
    }
  }

  StoreCacheManager.propTypes = {
    history: PropTypes.shape({
      action: PropTypes.string,
      listen: PropTypes.func,
    }),
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    historyCachePush: PropTypes.func,
    historyCachePop: PropTypes.func,
    saveHistoryCacheToLocal: PropTypes.func,
  };

  StoreCacheManager.defaultProps = {
    historyCachePush: () => null,
    historyCachePop: () => null,
    saveHistoryCacheToLocal: () => null,
    history: {
      action: '',
      listen: () => null,
    },
    location: {
      pathname: '',
      search: '',
    },
  };

  return connect(
    null,
    dispatch => ({
      historyCachePush: bindActionCreators(push, dispatch),
      historyCachePop: bindActionCreators(pop, dispatch),
      saveHistoryCacheToLocal: bindActionCreators(saveToLocal, dispatch),
    }),
  )(StoreCacheManager);
};
