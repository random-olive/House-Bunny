import { mainMenu, subMenu } from 'constants/data';
import { Main } from 'components/atoms/Buttons';
import { Horizontal, Vertical } from 'components/atoms/Bindings';
import { MenuContainer } from 'components/atoms/Container';
import { DEFAULT } from 'constants/styleConstants';

interface BarProp {
  display?: string;
}

export const MenuBar = () => {
  const subMenuIdx = Array.from(Array(subMenu.length), (_, i) => i);
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
                    <div key={key}>{menu.title}</div>
                  ))
              )}
            </div>
          </Main>
        ))}
      </Horizontal>
    </>
  );
};

export const DropdownBar: React.FC<BarProp> = ({ display }) => {
  return (
    <Vertical>
      <MenuContainer display={display}>
        {mainMenu[0].list.map((el, idx) => (
          <Main key={idx}>{el.title}</Main>
        ))}
      </MenuContainer>
    </Vertical>
  );
};
