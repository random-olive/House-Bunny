import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {} from 'firebase/firestore';
import styled from 'styled-components';

import { Member, Sticky } from 'components/atoms/Buttons';

import iconPath from './assets/icons.png';
import { Basic, Landing } from 'components/templates/Layouts';
import PATH from 'constants/routePath';

function App() {
  return (
    <>
      <div className='App'>
        <Suspense fallback={<img src={iconPath} />}>
          {/* <Routes>
            <Route element={<Basic />}>
            
            </Route>
          </Routes> */}
        </Suspense>
        <Landing />
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
