import React from 'react';
import './App.css';
import {} from 'firebase/firestore';
import styled from 'styled-components';

import { Member, Sticky } from 'components/atoms/Buttons';


import iconPath from './assets/icons.png';
import { Basic } from 'components/templates/Layouts';

function App() {
  return (
    <>
      <div className='App'>
        <Basic />

       
        <Sticky></Sticky>
        <Member></Member>
        <Check>
          <div className='text'>로그아웃</div>
          <div className='icon'></div>
        </Check>

        <Loading></Loading>
      </div>
    </>
  );
}

export default App;

const Check = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  .text {
    font-size: 1.2rem;
  }
  .icon {
    width: 30px;
    height: 30px;
    background: ${(props) => props.theme.color['--carrot-body']};
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 80px;
  background: bisque;
`;

const Img = styled.div`
  position: absolute;
  background: url(${iconPath});
  width: 150px;
  height: 80px;
  background-position: -10px 20px;
`;
