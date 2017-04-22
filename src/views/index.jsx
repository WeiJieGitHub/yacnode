import React from 'react';
import Sub from 'components/sub';
import style from './index.scss';

function Index() {
  return (
    <div>
      <h1 className={style.title}>Hello World~</h1>
      <Sub />
    </div>
  );
}

export default Index;
