import { mainMenu, subMenu } from 'constants/data';
import { Main } from 'components/atoms/Buttons';
import { Horizontal, Vertical } from 'components/atoms/Bindings';
import styled from 'styled-components';
export const MenuBar = () => {
  const subMenuIdx = Array.from(Array(subMenu.length), (_, i) => i);

  return (
    <>
      <Horizontal margin={'-10px 0 10px 0'}>
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

export const SmallMenuBar = () => {
  return (
    <Vertical>
      {mainMenu[0].list.map((el, idx) => (
        <Main key={idx}>{el.title}</Main>
      ))}
  
    </Vertical>
  );
};

