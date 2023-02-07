import { Outlet } from 'react-router-dom';
import PATH from 'constants/routePath';
import LogoAndSearch from '../organisms/LogoAndSearch';
import { MainBar, SubBar } from 'components/molecules/Menubar';

export const Basic = () => {
  return (
    <>
      {/*member*/}
      <LogoAndSearch />
      <MainBar />
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
