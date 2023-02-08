import { mainMenu, subMenu } from 'constants/data';
import { Main } from 'components/atoms/Buttons';
import { Horizontal } from 'components/atoms/Bindings';

export const Menubar = () => {
  const subMenuIdx = Array.from(Array(subMenu.length), (_, i) => i);

  return (
    <>
      <Horizontal>
        {mainMenu[0].list.map((el, idx) => (
          <Main key={idx}>
            {el.title}
            <div className='sub'>
              {subMenuIdx.map((i) => idx === i && subMenu[i].list.map((menu, key) => 
              (<div key={key}>{menu.title}</div>))
              )}
            </div>
          </Main>
        ))}
      </Horizontal>
    </>
  );
};
