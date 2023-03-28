import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {} from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';

import { BasicLayout } from 'components/templates/Layouts';

import PATH from 'constants/routePath';
import { LoadingBunny } from 'components/atoms/Loading';
import { debounce } from 'lodash';
import i18next from 'i18next';

const LandingPage = lazy(() => import('pages/LandingPage'));
const ContentsPage = lazy(() => import('pages/ContentsPage'));

function App() {
  const [windowSize, setWindowSize] = useState<number>(window.outerWidth);

  const handleResize = debounce(() => {
    setWindowSize(window.outerWidth);
  }, 1000);

  const { t, i18n } = useTranslation();

  const toggleLocales = useCallback(
    (locale: string) => {
      i18next.changeLanguage(locale);
    },
    [i18n]
  );

  //constants: group together after global store
  const pMainMenu = JSON.parse(
    JSON.stringify(t('main:mainMenu', { returnObjects: true }))
  );

  const pSubMenu = JSON.parse(
    JSON.stringify(t('main:subMenu', { returnObjects: true }))
  );

  const subMenuIdx = Array.from(Array(pSubMenu.length), (_, i) => i);

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
            <Route
              element={
                <BasicLayout
                  windowSize={windowSize}
                  toggleLocales={toggleLocales}
                  pMainMenu={pMainMenu}
                  pSubMenu={pSubMenu}
                  subMenuIdx={subMenuIdx}
                />
              }
            >
              <Route path={PATH.MAIN} element={<LandingPage />} />
              <Route path={PATH.HOUSE_WORK} element={<ContentsPage pSubMenu={pSubMenu}/>} />
              <Route path={PATH.TIPS} element={<ContentsPage />} />
            </Route>
          </Routes>
        </Suspense>
        <div style={{ marginBottom: '100px' }}>{t('main:test')}</div>
      </div>
    </>
  );
}

export default App;
