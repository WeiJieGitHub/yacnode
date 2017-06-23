import React from 'react';
import CSSModules from 'react-css-modules';
import loading from 'assets/pics/loading.svg';
import Container from 'components/Container/Container';
import styles from './Loading.scss';

function Loading() {
  return (
    <Container styleName="wrapper">
      <img src={loading} alt="loading" />
    </Container>
  );
}

export default CSSModules(Loading, styles);
