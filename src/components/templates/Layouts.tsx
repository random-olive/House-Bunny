import { DropdownHeader } from '../organisms/LogoAndSearch';
import { Outlet, Link } from 'react-router-dom';
import { MenuBar } from 'components/molecules/MenuBar';
import styled from 'styled-components';
import Footer from 'components/atoms/Footer';
import { LinkContainer, SubMenuContainer } from 'components/atoms/Container';
import { Tip } from 'components/atoms/Buttons';
import { RESPONSIVE } from 'constants/styleText';
import { HorizontalFlex } from 'components/atoms/Bindings';
import { ContentsBody, TipBody } from 'components/organisms/Contents';
import { menu } from 'constants/itemText';
import { H1 } from 'components/atoms/Text';
import { useState } from 'react';
import { ContentsBinding, PartBinding } from 'components/atoms/Bindings';
import { BackIcon, HelpIcon, StickyIcon } from 'components/atoms/Icons';
import PATH from 'constants/routePath';

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
        <LinkContainer to={PATH.TIPS}>기본 팁</LinkContainer>
      </Tip>
      <H1>{item.name}</H1>
      <ContentsBinding>
        <PartBinding>
          <h2>{menu[0]}</h2> <h3>{item.cycle1}</h3>
        </PartBinding>

        <PartBinding>
          <h2>{menu[1]}</h2> <h3>{item.cycle2}</h3>
        </PartBinding>
      </ContentsBinding>
      <HorizontalFlex>
        <ContentsBody body1={item.body1} body2={item.body2} />
      </HorizontalFlex>
    </>
  );
};

export const TipLayout = ({ item }: LayoutProps) => {
  return (
    <>
      <H1>{item.name}</H1>
      <ContentsBinding>
        <PartBinding>
          <ul>
            {item.tip.map((el: any, idx: number) => (
              <li key={idx}>
                <LinkContainer to={PATH.TIPS}>
                  <h2>{el}</h2>
                </LinkContainer>
              </li>
            ))}
          </ul>
        </PartBinding>
      </ContentsBinding>
      <HorizontalFlex>
        <TipBody body1={item.body1} />
      </HorizontalFlex>
      <LinkContainer to={PATH.HOUSE_WORK}>
        <BackIcon />
      </LinkContainer>
    </>
  );
};
