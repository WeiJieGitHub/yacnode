import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopics } from 'views/Topics/TopicsRedux';
import { bindActionCreators } from 'redux';

const TopicsRequestManagerWrapper = (WrappedComponent, request) => {
  const TopicsRequestManager = (props) => {
    const { dispatch } = props;
    return (
      <WrappedComponent
        request={request}
        fetchTopics={bindActionCreators(fetchTopics, dispatch)}
        {...props}
      />
    );
  };

  TopicsRequestManager.propTypes = {
    dispatch: PropTypes.func,
  };

  TopicsRequestManager.defaultProps = {
    dispatch: () => null,
  };
  return connect()(TopicsRequestManager);
};
export default TopicsRequestManagerWrapper;
