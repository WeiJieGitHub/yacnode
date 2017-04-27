import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.scss';

function Navigation() {
  return (
    <nav data-role="nav">
      <NavLink exact to="/" activeClassName={style.active}>全部</NavLink>
      <NavLink to="/good" activeClassName={style.active}>精华</NavLink>
      <NavLink to="/share" activeClassName={style.active}>分享</NavLink>
      <NavLink to="/ask" activeClassName={style.active}>问答</NavLink>
      <NavLink to="/job" activeClassName={style.active}>招聘</NavLink>
    </nav>
  );
}

export default Navigation;
