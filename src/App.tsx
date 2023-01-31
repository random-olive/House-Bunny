import React from 'react';
import logo from 'images/logo.svg';
import './App.css';
import {} from 'firebase/firestore';

import {
  Main,
  MainWithSlide,
  Member,
  Square,
  Sticky,
} from 'components/atoms/Buttons';
import Searchbar from 'components/molecules/Searchbar';

import { data } from './constants/data/menu';
import { Section } from 'components/atoms/Sections';

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
            <Main>wed&baby</Main>
            {/* <div className='LNB'>
              {data[1].list.map((el) => (
                <MainWithSlide>{el.title}</MainWithSlide>
              ))}
            </div> */}
          </div>

          {data[2].list.map((el, idx) => (
            <Main key={idx}>{el.title}</Main>
          ))}
        </div>
        <Searchbar />
        <Section></Section>
        <Sticky></Sticky>
        <Member></Member>
      </div>
    </>
  );
}

export default App;
