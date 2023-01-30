import React from 'react';
import logo from 'images/logo.svg';
import './App.css';
import {} from 'firebase/firestore';

import { Main, MainWithSlide } from 'components/buttons/MenuButtons';
import { data } from './constants/data/menu';

function App() {
  return (
    <>
      <div className='App'>
        <div className='GNB'>
          <div className='select'>
            <Main>carrot</Main>
            {/* <div className='LNB'>
              {data[0].list.map((el) => (
                <MainWithSlide>{el.title}</MainWithSlide>
              ))}
            </div> */}
            {/* hover하면 메뉴 나오게*/}
          </div>

          <div className='select'>
            <Main>결혼육아</Main>
            {/* <div className='LNB'>
              {data[1].list.map((el) => (
                <MainWithSlide>{el.title}</MainWithSlide>
              ))}
            </div> */}
          </div>

          {data[2].list.map((el) => (
            <Main>{el.title}</Main>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
