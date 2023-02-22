import { DropdownHeader } from '../organisms/LogoAndSearch';
import { Outlet } from 'react-router-dom';
import { MenuBar } from 'components/molecules/MenuBar';
import styled from 'styled-components';
import Footer from 'components/atoms/Footer';
import { SubMenuContainer } from 'components/atoms/Container';

interface LayoutProps {
  children: React.ReactNode;
}

export const BasicLayout = () => {
  return (
    <>
      {/*member 관련 컴포넌트*/}
      <DropdownHeader />
      {window.outerWidth < 768 ? '' : <MenuBar />}
      <Outlet />
      <Footer />
    </>
  );
};

export const SubMenuLayout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <SubMenuContainer>
        <div className='part'>{props.children}</div>
      </SubMenuContainer>
    </>
  );
};

//카테고리 내부 클릭시 템플릿(컨텐츠 페이지의 템플릿) : +세부메뉴바, (x정리탭x), +컨텐츠

//로고 157px
