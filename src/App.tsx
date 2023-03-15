import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {} from 'firebase/firestore';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Member, Sticky } from 'components/atoms/Buttons';

import { BasicLayout } from 'components/templates/Layouts';

import PATH from 'constants/routePath';
import { LoadingBunny } from 'components/atoms/Loading';
import { debounce } from 'lodash';

const LandingPage = lazy(() => import('pages/LandingPage'));
const ContentsPage = lazy(() => import('pages/ContentsPage'));

function App() {
  const [windowSize, setWindowSize] = useState<number>(window.outerWidth);

  const handleResize = debounce(() => {
    setWindowSize(window.outerWidth);
  }, 1000);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    
      <div className='App'>
        <Suspense fallback={<LoadingBunny />}>
          <Routes>
            <Route element={<BasicLayout windowSize={windowSize}/>}>
              <Route path={PATH.MAIN} element={<LandingPage />} />
              <Route path={PATH.HOUSE_WORK} element={<ContentsPage />} />
              <Route path={PATH.TIPS} element={<ContentsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
