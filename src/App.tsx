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
const LandingPage = lazy(() => import('pages/LandingPage'));

function App() {
  const [windowSize, setWindowSize] = useState<number>(window.outerWidth);
  const handleResize = () => {
    setWindowSize(window.outerWidth);
  };
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
            <Route element={<BasicLayout />}>
              <Route path={PATH.MAIN} element={<LandingPage />} />
              {/* <Route path={PATH.CONTENTS} element={<Contents />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
