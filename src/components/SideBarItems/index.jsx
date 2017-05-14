import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './SideBarItems.scss';

function SideBarItems() {
  return (
    <div styleName="wrapper">
      <NavLink exact to="/" styleName="item" activeClassName={styles['item--active']}>全部</NavLink>
      <NavLink to="/good" styleName="item" activeClassName={styles['item--active']}>精华</NavLink>
      <NavLink to="/share" styleName="item" activeClassName={styles['item--active']}>分享</NavLink>
      <NavLink to="/ask" styleName="item" activeClassName={styles['item--active']}>问答</NavLink>
      <NavLink to="/job" styleName="item" activeClassName={styles['item--active']}>招聘</NavLink>
    </div>
  );
}

export default CSSModules(SideBarItems, styles);
