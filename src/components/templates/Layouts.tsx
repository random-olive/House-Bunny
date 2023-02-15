import { Outlet } from 'react-router-dom';
import { Header, SmallHeader } from '../organisms/LogoAndSearch';
import { MenuBar, SmallMenuBar } from 'components/molecules/MenuBar';
import styled from 'styled-components';
import Footer from 'components/atoms/Footer';
import { CONDITION } from 'constants/styleConstants';

export const BasicLayout = () => {
  return (
    <>
      {/*member 관련 컴포넌트*/}

      <SmallHeader />
      {window.outerWidth < 768 ? '': <MenuBar />}
      <Outlet />
      <Footer />
    </>
  );
};

//카테고리 내부 클릭시 템플릿(컨텐츠 페이지의 템플릿) : +세부메뉴바, (x정리탭x), +컨텐츠

//로고 157px
