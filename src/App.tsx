import React from 'react';
import logo from 'images/logo.svg';
import './App.css';
import {} from 'firebase/firestore';
import MenuButton from 'components/buttons/MenuButton';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <div className='App'>
        <GlobalStyle>
          <p>TypeScript 테스트 중...</p>
          <MenuButton menu='가사' />
        </GlobalStyle>
      </div>
    </>
  );
}

export default App;
