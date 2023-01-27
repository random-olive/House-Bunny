import React from 'react';
import logo from 'images/logo.svg';
import './App.css';
import {} from 'firebase/firestore';
import MenuButton from 'components/buttons/MenuButton';
import { GlobalStyle } from './styles/GlobalStyle';
import { myTheme } from './styles/theme/DefaultTheme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

function App() {
  return (
    <>
      <div className='App'>
        {/* <GlobalStyle /> */}
        <ThemeProvider theme={myTheme}>
          <Button>Hello</Button>
          <p>TypeScript 테스트 중...</p>
          <MenuButton menu='가사' />
        </ThemeProvider>
      </div>
    </>
  );
}

const Button = styled.button`
background: ${(props)=>props.theme.color['--text']};
`

export default App;
