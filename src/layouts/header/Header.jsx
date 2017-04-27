import React from 'react';
import Navigation from 'layouts/navigation/Navigation';

function Header() {
  return (
    <header>
      <h1 data-role="title">CNode</h1>
      <Navigation />
    </header>
  );
}

export default Header;
