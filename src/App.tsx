import React from 'react';
import './App.css';
import {} from 'firebase/firestore';
import styled from 'styled-components';

import { Member, Sticky } from 'components/atoms/Buttons';

import { Section } from 'components/atoms/Sections';
import iconPath from './assets/icons.png';
import { Basic } from 'components/templates/Layouts';

function App() {
  return (
    <>
      <div className='App'>
        <Basic />

        <Section></Section>
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

const Title = styled.div`
  .icon {
    width: 25px;
    height: 25px;
    background: ${(props) => props.theme.color['--carrot-body']};
  }
  position: absolute;
  top: 135px;
  left: 470px;
  /* border: 1px solid red; */
  background-color: white;
  color: ${(props) => props.theme.color['--section-line']};
  width: 70px;
  height: 30px;
  font-size: 1.6rem;
  font-size: 20px;
  font-weight: 700;
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
