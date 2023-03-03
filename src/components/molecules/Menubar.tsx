import { mainMenu, subMenu, itemList, contentList } from 'constants/menuText';
import { Main, Sub, Sub2, Sub3 } from 'components/atoms/Buttons';
import { useState } from 'react';

import {
  Horizontal,
  Vertical,
  HorizontalFlex,
  MenuBinding,
} from 'components/atoms/Bindings';
import { subMenuIdx } from 'constants/menuText';
import { MenuContainer, LinkContainer } from 'components/atoms/Container';
import { DEFAULT } from 'constants/styleText';

interface BarProp {
  display?: string;
  inActivate?: () => void;
  onClick?: (() => void) | undefined;
  // selected?: string;
  selected?: any;
  setSelected?: any;
}

export const MenuBar = () => {
  return (
    <>
      <Horizontal margin={DEFAULT.MENU_MARGIN}>
        {mainMenu[0].list.map((el, idx) => (
          <Main key={idx}>
            {el.title}
            <div className='sub'>
              {subMenuIdx.map(
                (i) =>
                  idx === i &&
                  subMenu[i].list.map((menu, key) => (
                    <LinkContainer key={key} to={menu.href}>
                      <div>{menu.title}</div>
                    </LinkContainer>
                  ))
              )}
            </div>
          </Main>
        ))}
      </Horizontal>
    </>
  );
};

export const SubMenuBar = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <MenuBinding margin={DEFAULT.MENU_MARGIN}>
        {subMenu[0].list.map((el, idx) => (
          <Sub
            onClick={() => {
              setSelected({ menu: el.title });
            }}
            key={idx}
          >
            {el.title}
          </Sub>
        ))}
        <button onClick={() => console.log(selected.menu)}>메뉴</button>
      </MenuBinding>
    </>
  );
};

export const ItemListMenuBar = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <MenuBinding margin={DEFAULT.MENU_MARGIN}>
        {itemList[0].list.map((el, idx) => (
          <Sub2
            onClick={() => {
              setSelected({ menu: el.item });
              // console.log(el.item)
            }}
            key={idx}
          >
            {el.item}
          </Sub2>
        ))}
        <button onClick={() => setSelected({ menu: '1', item: '3' })}>
          ex
        </button>

        <button onClick={() => console.log(selected.item)}>클릭</button>
      </MenuBinding>
      {/* {itemList.map((el) => {
        if (el.title === selected) console.log(el.list);
      })} */}
    </>
  );
};

export const ContentMenuBar = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <MenuBinding margin={DEFAULT.MENU_MARGIN}>
        {contentList[0].list.map((el, idx) => (
          <Sub3 key={idx}>{el.content}</Sub3>
        ))}
        <button onClick={() => console.log(selected)}>클릭</button>
      </MenuBinding>
    </>
  );
};

export const SubMenuBarSet = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <SubMenuBar selected={selected} setSelected={setSelected} />
      <ItemListMenuBar selected={selected} />
      <ContentMenuBar selected={selected} />
    </>
  );
};

export const DropdownBar = ({ display, inActivate }: BarProp) => {
  return (
    <Vertical>
      <MenuContainer display={display}>
        {mainMenu[0].list.map((el, idx) => (
          <LinkContainer key={idx} to={el.href} onClick={inActivate}>
            <Main>{el.title}</Main>
          </LinkContainer>
        ))}
      </MenuContainer>
    </Vertical>
  );
};
