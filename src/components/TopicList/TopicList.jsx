import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Topic from 'components/Topic/Topic';
import styles from './TopicList.scss';

function TopicList(props) {
  const { topics, prefix } = props;
  const items = topics.map(topic => (<Topic topic={topic} key={topic.id} to={`${prefix}/${topic.id}`} />));
  return (
    <div styleName="wrapper">
      { items }
    </div>
  );
}

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object),
  prefix: PropTypes.string,
};

TopicList.defaultProps = {
  topics: [],
  prefix: '#',
};

export default CSSModules(TopicList, styles);
