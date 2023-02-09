import { Outlet } from 'react-router-dom';
import PATH from 'constants/routePath';
import LogoAndSearch from '../organisms/LogoAndSearch';
import { Menubar } from 'components/molecules/Menubar';
import styled from 'styled-components';
import { LandingBody } from 'components/organisms/LandingBody';
import Footer from 'components/atoms/Footer';
import { ReactNode } from 'react';


interface Props {
  body: ReactNode;
}

export const Basic: React.FC<Props> = ({ body }) => {
  return (
    <>
      {/*member*/}
      <Div>
        <LogoAndSearch />
      </Div>
      <Menubar />
      {body}
      <Footer />
    </>
  );
};

export const Landing = () => {
  return (
    <>
      <Basic body={<LandingBody />}></Basic>
    </>
  );
};

export const Contents = () => {
  return (
    <>
      {' '}
      <Basic body={'컨텐츠 페이지'}></Basic>
    </>
  );
};

const Div = styled.div`
  margin-left: -157px;
`;
