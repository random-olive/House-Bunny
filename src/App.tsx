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
  const langInfo = localStorage.getItem('lang') || 'ko-KR';

  const toggleLocales = useCallback(
    (locale: string) => {
      localStorage.setItem('lang', locale);
      i18next.changeLanguage(locale);
    },
    [i18n]
  );

  //constants: group together after global store
  const pMainMenu = JSON.parse(
    JSON.stringify(t('menu:mainMenu', { returnObjects: true }))
  );

  const pSubMenu = JSON.parse(
    JSON.stringify(t('menu:subMenu', { returnObjects: true }))
  );

  const subMenuIdx = Array.from(Array(pSubMenu.length), (_, i) => i);

  const mcMenu = JSON.parse(
    JSON.stringify(t('item:menu', { returnObjects: true }))
  );

  const riceCooker = JSON.parse(
    JSON.stringify(t('item:riceCooker', { returnObjects: true }))
  );

  const refrigerator = JSON.parse(
    JSON.stringify(t('item:refrigerator', { returnObjects: true }))
  );

  const tv = JSON.parse(JSON.stringify(t('item:tv', { returnObjects: true })));
  const airConditioner = JSON.parse(
    JSON.stringify(t('item:airConditioner', { returnObjects: true }))
  );
  const ceilingFan = JSON.parse(
    JSON.stringify(t('item:ceilingFan', { returnObjects: true }))
  );
  const bed = JSON.parse(
    JSON.stringify(t('item:bed', { returnObjects: true }))
  );
  const wardrobe = JSON.parse(
    JSON.stringify(t('item:wardrobe', { returnObjects: true }))
  );
  const wineCellar = JSON.parse(
    JSON.stringify(t('item:wineCellar', { returnObjects: true }))
  );
  const toilet = JSON.parse(
    JSON.stringify(t('item:toilet', { returnObjects: true }))
  );
  const bathtub = JSON.parse(
    JSON.stringify(t('item:bathtub', { returnObjects: true }))
  );
  const frontRoom = JSON.parse(
    JSON.stringify(t('item:frontRoom', { returnObjects: true }))
  );
  const veranda = JSON.parse(
    JSON.stringify(t('item:veranda', { returnObjects: true }))
  );
  const notice = JSON.parse(
    JSON.stringify(t('item:notice', { returnObjects: true }))
  );

  const tipMenu = JSON.parse(
    JSON.stringify(t('tip:tipList', { returnObjects: true }))
  );

  useEffect(() => {
    i18next.changeLanguage(langInfo);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [langInfo]);

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
              {[PATH.HOUSE_WORK, PATH.TIPS].map((path, i) => {
                return (
                  <Route
                    path={path}
                    key={i}
                    element={
                      <ContentsPage
                        pSubMenu={pSubMenu}
                        mcMenu={mcMenu}
                        riceCooker={riceCooker}
                        refrigerator={refrigerator}
                        tv={tv}
                        airConditioner={airConditioner}
                        ceilingFan={ceilingFan}
                        bed={bed}
                        wardrobe={wardrobe}
                        wineCellar={wineCellar}
                        toilet={toilet}
                        bathtub={bathtub}
                        frontRoom={frontRoom}
                        veranda={veranda}
                        notice={notice}
                        tipMenu={tipMenu}
                      />
                    }
                  />
                );
              })}
            </Route>
          </Routes>
          {/* <button
            style={{ margin: '100px' }}
            onClick={() => {
              console.log(tipMenu);
            }}
          >
            클릭
          </button> */}
        </Suspense>
      </div>
    </>
  );
}

export default App;
