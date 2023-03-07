import { mainMenu, subMenu, itemList, contentList } from 'constants/menuText';
import { Main, Sub, Sub2, Sub3 } from 'components/atoms/Buttons';
import { useState, useEffect } from 'react';

import { Horizontal, Vertical, MenuBinding } from 'components/atoms/Bindings';
import { subMenuIdx } from 'constants/menuText';
import { MenuContainer, LinkContainer } from 'components/atoms/Container';
import { DEFAULT } from 'constants/styleText';

interface BarProp {
  display?: string;
  inActivate?: () => void;
  onClick?: (() => void) | undefined;
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
  useEffect(()=>{},[selected.menu])
  return (
    <>
      <MenuBinding margin={DEFAULT.MENU_MARGIN}>
        {subMenu[0].list.map((el, idx) => (
          <Sub
            onClick={() => {
              setSelected({ menu: el.title });
              itemList.map((el) => {
                if (el.title === selected.menu) {
                  setSelected({ list1: el.list });
                  console.log(el);
                }
              });
            }}
            key={idx}
          >
            {el.title}
          </Sub>
        ))}
        <button onClick={() => console.log(selected.menu)}>메뉴</button>
        <button onClick={() => console.log(selected.list1)}>메뉴</button>
      </MenuBinding>
    </>
  );
};

export const ItemListMenuBar = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <MenuBinding margin={DEFAULT.MENU_MARGIN}>
        {selected.list1 !== undefined &&
          selected.list1.map((el: any, idx: any) => (
            <Sub2
              onClick={() => {
                // setSelected({ item: el.item });
              }}
              key={idx}
            >
              {el.item}
            </Sub2>
          ))}

        <button onClick={() => console.log(selected.item)}>아이템</button>
      </MenuBinding>
      {/* {itemList.map((el) => {
        if (el.title === selected.menu) {
          return(
            <div>{el.list[0]}</div>
          )
        }
      })} */}
      {/*그대로 옮김*/}
      {/* {itemList[0].list.map((el, idx) => (
          <Sub2
            onClick={() => {
              setSelected({ item: el.item });
            }}
            key={idx}
          >
            {el.item}
          </Sub2>
        ))} */}
    </>
  );
};

export const ContentMenuBar = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <MenuBinding margin={DEFAULT.MENU_MARGIN}>
        {contentList[0].list.map((el, idx) => (
          <Sub3
            onClick={() => {
              setSelected({ content: el.content });
            }}
            key={idx}
          >
            {el.content}
          </Sub3>
        ))}
        <button onClick={() => console.log(selected.content)}>컨텐츠</button>
      </MenuBinding>
    </>
  );
};

export const SubMenuBarSet = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <SubMenuBar selected={selected} setSelected={setSelected} />
      <ItemListMenuBar selected={selected} setSelected={setSelected} />
      <ContentMenuBar selected={selected} setSelected={setSelected} />
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
