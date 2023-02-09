import { Outlet } from 'react-router-dom';
import PATH from 'constants/routePath';
import LogoAndSearch from '../organisms/LogoAndSearch';
import { Menubar } from 'components/molecules/Menubar';
import styled from 'styled-components';
import { LandingBody } from 'components/organisms/LandingBody';
import Footer from 'components/atoms/Footer';
import { Vertical } from 'components/atoms/Bindings';

export const Basic = ({ body: any }) => {
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
      <Basic body={dd}></Basic>
    </>
  );
};

export const Contents = () => {
  return <>{/*컨텐츠 */}</>;
};

const Div = styled.div`
  margin-left: -157px;
`;
