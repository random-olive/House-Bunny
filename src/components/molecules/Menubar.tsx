import { mainMenu, subMenu } from 'constants/menuText';
import { Main, Sub, Sub2, Sub3 } from 'components/atoms/Buttons';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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

export const MenuBar = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <Horizontal margin={DEFAULT.MENU_MARGIN}>
        {mainMenu[0].list.map((el, idx) => (
          <Main key={idx} idx={idx}>
            {el.title}
            <div className='sub'>
              {subMenuIdx.map(
                (i) =>
                  idx === i &&
                  subMenu[i].list.map((menu, key) => (
                    <LinkContainer
                      key={key}
                      to={menu.href}
                      onClick={() => {
                        setSelected({
                          menu: menu.title,
                          idx1: key,
                        });
                      }}
                    >
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
      {/* <button
        onClick={() => {
          console.log(selected);
        }}
      >
        상태 옮김 확인
      </button> */}
      <MenuBinding margin={DEFAULT.MENU_MARGIN}>
        {subMenu[0].list.map((el, idx) => (
          <Sub
            onClick={() => {
              setSelected({
                menu: el.title,
                list1: el.list1,
                // list2: el.list2,
                idx1: idx,
              });
            }}
            style={{
              backgroundColor: selected.idx1 === idx ? '#f4e7fb' : '',
              color: selected.idx1 === idx ? '#d5b2f8' : '',
            }}
            key={idx}
          >
            {el.title}
          </Sub>
        ))}
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
                setSelected({ ...selected, idx2: idx });
              }}
              style={{
                backgroundColor: selected.idx2 === idx ? '#f1fcde' : '',
                color: selected.idx2 === idx ? '#91dd80' : '',
              }}
              key={idx}
            >
              {el.item1}
            </Sub2>
          ))}
      </MenuBinding>
    </>
  );
};

// export const ContentMenuBar = ({ selected, setSelected }: BarProp) => {
//   return (
//     <>
//       <MenuBinding margin={DEFAULT.MENU_MARGIN}>
//         {selected.list2 !== undefined &&
//           selected.list2.map((el: any, idx: number) => (
//             <Sub2
//               onClick={() => {
//                 setSelected({ ...selected, idx3: idx });
//               }}
//               style={{
//                 backgroundColor: selected.idx3 === idx ? '#fcf4de' : '',
//                 color: selected.idx3 === idx ? '#f6c59b' : '',
//               }}
//               key={idx}
//             >
//               {el.item2}
//             </Sub2>
//           ))}
//       </MenuBinding>
//     </>
//   );
// };

export const SubMenuBarSet = ({ selected, setSelected }: BarProp) => {
  return (
    <>
      <SubMenuBar selected={selected} setSelected={setSelected} />
      <ItemListMenuBar selected={selected} setSelected={setSelected} />
      {/* <ContentMenuBar selected={selected} setSelected={setSelected} /> */}
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
      {console.log(mainMenu[0])}
    </Vertical>
  );
};
