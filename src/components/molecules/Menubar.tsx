import { mainMenu, subMenu } from 'constants/data';
import { Main } from 'components/atoms/Buttons';
import { Horizontal } from 'components/atoms/Bindings';

export const Menubar = () => {
  return (
    <>
      <Horizontal>
        {mainMenu[0].list.map((el, idx) => (
          <Main key={idx}>
            {el.title}
            <div className='sub'>

            

              {idx === 0 &&
                subMenu[0].list.map((el, i) => <div key={i}>{el.title}</div>)}

              {idx === 1 &&
                subMenu[1].list.map((el, i) => <div key={i}>{el.title}</div>)}
            </div>
          </Main>
        ))}
      </Horizontal>
    </>
  );
};
