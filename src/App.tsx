import React from 'react';
import logo from 'images/logo.svg';
import './App.css';
import {} from 'firebase/firestore';

import { Main, Selected } from 'components/buttons/MenuButton';

function App() {
  return (
    <>
      <div className='App'>
        <Main>당근</Main>
        <Selected>가계부</Selected>
        <Main>결혼육아</Main>
        <Main>레시피</Main>
        <Main>건 강</Main>
        <Main>취 미</Main>
        <Main>파 티</Main>
        <Main>여 행</Main>
        <Main>커뮤니티</Main>
        <Main>Shop</Main>
      </div>
    </>
  );
}

export default App;
