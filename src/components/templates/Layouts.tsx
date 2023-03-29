import { DropdownBarSet, BarSet } from '../organisms/LogoAndSearch';
import { Outlet, Link } from 'react-router-dom';
import { MenuBar } from 'components/molecules/MenuBar';
import styled from 'styled-components';
import { Header, Footer } from 'components/atoms/NavBar';
import { LinkContainer, SubMenuContainer } from 'components/atoms/Container';
import { Tip } from 'components/atoms/Buttons';
import { RESPONSIVE } from 'constants/styleText';
import { HorizontalFlex } from 'components/atoms/Bindings';
import { ContentsBody, TipBody } from 'components/organisms/Contents';
import { menu } from 'constants/itemText';
import { H1 } from 'components/atoms/Text';
import { useState } from 'react';
import { ContentsBinding, PartBinding } from 'components/atoms/Bindings';
import {
  BackIcon,
  DownIcon,
  HelpIcon,
  StickyIcon,
  UpIcon,
} from 'components/atoms/Icons';

import PATH from 'constants/routePath';

interface LayoutProps {
  children?: React.ReactNode;
  item?: any;
  mcMenu?: any;
}

export const BasicLayout = ({
  windowSize,
  toggleLocales,
  pMainMenu,
  pSubMenu,
  subMenuIdx,
}: any) => {
  return (
    <>
      <Header toggleLocales={toggleLocales} />
      <DropdownBarSet pMainMenu={pMainMenu} />
      {windowSize < 768 ? (
        ''
      ) : (
        <MenuBar
          pMainMenu={pMainMenu}
          pSubMenu={pSubMenu}
          subMenuIdx={subMenuIdx}
        />
      )}
      <Outlet />

      <StickyIcon>
        <UpIcon
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
        <DownIcon
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }}
        />
      </StickyIcon>

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

export const ContentsLayout = ({ item, mcMenu }: LayoutProps) => {
  return (
    <>
      <Tip>
        <LinkContainer to={PATH.TIPS}>Tips</LinkContainer>
      </Tip>
      <H1>{item.name}</H1>
      <ContentsBinding>
        <PartBinding>
          <h2>{mcMenu[0]}</h2> <h3>{item.cycle1}</h3>
        </PartBinding>

        <PartBinding>
          <h2>{mcMenu[1]}</h2> <h3 style={{marginRight:'0px'}}>{item.cycle2}</h3>
        </PartBinding>
      </ContentsBinding>
      <HorizontalFlex>
        <ContentsBody body1={item.body1} body2={item.body2} mcMenu={mcMenu} />
      </HorizontalFlex>
    </>
  );
};

export const TipLayout = ({ item }: LayoutProps) => {
  const [tip, setTip] = useState({ title: '', idx: -1 });
  return (
    <>
      <H1>{item.name}</H1>
      <ContentsBinding>
        <PartBinding>
          <ul>
            {item.tip.map((el: any, idx: number) => (
              <li key={idx}>
                <LinkContainer
                  to={PATH.TIPS}
                  onClick={() => setTip({ title: el, idx: idx })}
                >
                  <h2>{el}</h2>
                </LinkContainer>
              </li>
            ))}
          </ul>
        </PartBinding>
      </ContentsBinding>
      <HorizontalFlex>
        <TipBody title={tip.title} body1={item.body[tip.idx] || []} />
      </HorizontalFlex>
      <LinkContainer to={PATH.HOUSE_WORK}>
        <BackIcon />
      </LinkContainer>
    </>
  );
};
