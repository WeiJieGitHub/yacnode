import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import getTabTitle from 'utils/getTabTitle';
import { timeFlies } from 'utils/utils';
import icons from 'styles/icons.scss';
import styles from './Topic.scss';

function Topic(props) {
  const { topic } = props;
  let label;
  switch (true) {
    case topic.top:
      label = (<span styleName="label">顶</span>);
      break;
    case topic.good:
      label = (<span styleName="label">精</span>);
      break;
    default:
      label = null;
  }
  return (
    <div styleName="wrapper" href="#">
      <div styleName="avatar">
        <img src={topic.author.avatar_url} alt={topic.author.loginname} />
      </div>
      <div styleName="content">
        <div styleName="top">
          <span>{topic.author.loginname}</span>
          {label}
        </div>
        <div styleName="title"><NavLink to="/">{topic.title}</NavLink></div>
        <div styleName="bottom">
          <span styleName="info">
            <span>{getTabTitle(topic.tab)}</span>
            <span>{timeFlies(topic.last_reply_at)}</span>
          </span>
          <span styleName="reply"><i className={icons['icon-chat']} /> {topic.reply_count}</span>
        </div>
      </div>
    </div>
  );
}

Topic.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.string,
    author_id: PropTypes.string,
    tab: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    last_reply_at: PropTypes.string,
    good: PropTypes.bool,
    top: PropTypes.bool,
    reply_count: PropTypes.number,
    visit_count: PropTypes.number,
    create_at: PropTypes.string,
    author: PropTypes.shape({
      loginname: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }),
};

Topic.defaultProps = {
  topic: {},
};

export default CSSModules(Topic, styles);
