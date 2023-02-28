import { DropdownHeader } from '../organisms/LogoAndSearch';
import { Outlet } from 'react-router-dom';
import { MenuBar } from 'components/molecules/MenuBar';
import styled from 'styled-components';
import Footer from 'components/atoms/Footer';
import { SubMenuContainer } from 'components/atoms/Container';
import { Tip } from 'components/atoms/Buttons';
import { RESPONSIVE } from 'constants/styleText';
import { HorizontalFlex } from 'components/atoms/Bindings';
import { ContentsBody } from 'components/organisms/Contents';
import { menu } from 'constants/itemText';
import { H1 } from 'components/atoms/Text';
import { HelpIcon, StickyIcon } from 'components/atoms/Icons';

interface LayoutProps {
  children?: React.ReactNode;
  item?: any;
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

export const SubMenuLayout = (props: LayoutProps) => {
  return (
    <>
      <SubMenuContainer>
        <div className='part'>{props.children}</div>
      </SubMenuContainer>
    </>
  );
};

export const ContentsLayout = ({ item }: LayoutProps) => {
  return (
    <>
      <Tip>
        <div>기본 팁</div>
      </Tip>
      <H1>{item.name}</H1>
      <Contents>
        <Part>
          <h2>{menu[0]}</h2> <h3>{item.cycle1}</h3>
        </Part>

        <Part>
          <h2>{menu[1]}</h2> <h3>{item.cycle2}</h3>
        </Part>
      </Contents>
      <HorizontalFlex>
        <ContentsBody body1={item.body1} body2={item.body2} />
      </HorizontalFlex>
    </>
  );
};

const Contents = styled.div`
  display: flex;
  h3 {
    margin-top: 23px;
    margin-right: 210px;
    @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
      margin-right: 20vw;
    } 
  }
`;

const Part = styled.div`
  display: flex;

  h2 {
    margin-right: 10px;
    color: ${(props) => props.theme.color['--text-light-orange']};
  }
  h3 {
    color: ${(props) => props.theme.color['--text']};
  }
`;

//카테고리 내부 클릭시 템플릿(컨텐츠 페이지의 템플릿) : +세부메뉴바, (x정리탭x), +컨텐츠

//로고 157px
