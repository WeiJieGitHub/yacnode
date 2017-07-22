import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'utils/utils';

export default (WrappedComponent) => {
  class ScrollTopManager extends Component {
    constructor(props) {
      super(props);
      this.onScroll = debounce(() => {
        const topValue = document.body.scrollTop;
        this.props.saveScrollTop(topValue);
      }, 50);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
      document.body.scrollTop = this.props.scrollTop;
    }

    componentDidUpdate(nextProps) {
      const { loadState } = this.props;
      const nextLoadState = nextProps.loadState;
      if (loadState !== nextLoadState) {
        document.body.scrollTop = this.props.scrollTop;
      }
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  ScrollTopManager.propTypes = {
    scrollTop: PropTypes.number,
    saveScrollTop: PropTypes.func,
    loadState: PropTypes.string,
  };

  ScrollTopManager.defaultProps = {
    scrollTop: 0,
    saveScrollTop: () => null,
    loadState: 'READY',
  };

  return ScrollTopManager;
};
