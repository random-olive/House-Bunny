import { DropdownHeader } from '../organisms/LogoAndSearch';
import { Outlet } from 'react-router-dom';
import { MenuBar } from 'components/molecules/MenuBar';
import styled from 'styled-components';
import Footer from 'components/atoms/Footer';
import { SubMenuContainer } from 'components/atoms/Container';
import { HelpIcon, StickyIcon } from 'components/atoms/Icons';

interface LayoutProps {
  children?: React.ReactNode;
}

export const BasicLayout = () => {
  return (
    <>
      {/*member 관련 컴포넌트*/}
      <DropdownHeader />
      {window.outerWidth < 768 ? '' : <MenuBar />}
      <Outlet />
      <StickyIcon />
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

export const ContentsLayout :React.FC<LayoutProps> = (props:LayoutProps) => {
return (
  <>
  <h1>밥솥</h1>
  
  <h2>사용 팁</h2>
  <h2>관리</h2>
  <h2>청소</h2>
  </>
)
}


//카테고리 내부 클릭시 템플릿(컨텐츠 페이지의 템플릿) : +세부메뉴바, (x정리탭x), +컨텐츠

//로고 157px
