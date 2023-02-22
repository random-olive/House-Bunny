import { mainMenu, subMenu, itemList, contentList } from 'constants/dataTxt';
import { Main, Sub, Sub2, Sub3 } from 'components/atoms/Buttons';
import {
  Horizontal,
  Vertical,
  HorizontalFlex,
} from 'components/atoms/Bindings';
import { subMenuIdx } from 'constants/dataTxt';
import { MenuContainer, LinkContainer } from 'components/atoms/Container';
import { DEFAULT } from 'constants/styleConstants';

interface BarProp {
  display?: string;
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
                    <>
                      <LinkContainer to={menu.href}>
                        <div key={key}>{menu.title}</div>
                      </LinkContainer>
                    </>
                  ))
              )}
            </div>
          </Main>
        ))}
      </Horizontal>
    </>
  );
};

export const SubMenuBar = () => {
  return (
    <>
      <HorizontalFlex margin={DEFAULT.MENU_MARGIN}>
        {subMenu[0].list.map((el, idx) => (
          <Sub key={idx}>{el.title}</Sub>
        ))}
      </HorizontalFlex>
    </>
  );
};

export const ItemListMenuBar = () => {
  return (
    <>
      <HorizontalFlex margin={DEFAULT.MENU_MARGIN}>
        {itemList[0].list.map((el, idx) => (
          <Sub2 key={idx}>{el.item}</Sub2>
        ))}
      </HorizontalFlex>
    </>
  );
};

export const ContentMenuBar = () => {
  return (
    <>
      <HorizontalFlex margin={DEFAULT.MENU_MARGIN}>
        {contentList[0].list.map((el, idx) => (
          <Sub3 key={idx}>{el.content}</Sub3>
        ))}
      </HorizontalFlex>
    </>
  );
};

export const DropdownBar: React.FC<BarProp> = ({ display }) => {
  return (
    <Vertical>
      <MenuContainer display={display}>
        {mainMenu[0].list.map((el, idx) => (
          <LinkContainer to={el.href}>
            <Main key={idx}>{el.title}</Main>
          </LinkContainer>
        ))}
      </MenuContainer>
    </Vertical>
  );
};
