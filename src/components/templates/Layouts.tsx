import { Outlet } from 'react-router-dom';
import PATH from 'constants/routePath';
import LogoAndSearch from '../organisms/LogoAndSearch';
import { Menubar } from 'components/molecules/Menubar';
import styled from 'styled-components';
import { LandingBody } from 'components/organisms/LandingBody';

export const Basic = () => {
  return (
    <>
      {/*member*/}
      <Div>
        <LogoAndSearch />
      </Div>
      <Menubar /> {/*Outlet 넣어서 제대로 바꾸기*/ }
      <LandingBody></LandingBody>
      {/*menu
        main
        footer*/}
    </>
  );
};

export const Landing = () => {
  return <>{/*랜딩 */}</>;
};

export const Contents = () => {
  return <>{/*컨텐츠 */}</>;
};

const Div = styled.div`
  margin-left: -157px;
`;
