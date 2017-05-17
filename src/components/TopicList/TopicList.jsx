import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Topic from 'components/Topic/Topic';
import { makeUnique } from 'utils/utils';
import styles from './TopicList.scss';

function TopicList(props) {
  const { topics } = props;
  const items = topics.map(topic => (<Topic topic={topic} key={makeUnique()} />));
  return (
    <div styleName="wrapper">
      { items }
    </div>
  );
}

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object),
};

TopicList.defaultProps = {
  topics: [],
};

export default CSSModules(TopicList, styles);
