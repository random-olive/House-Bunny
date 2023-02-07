import { menuData } from 'constants/data';
import { Main } from 'components/atoms/Buttons';
import { Horizontal } from 'components/atoms/Bindings';

export const MainBar = () => {
  return (
    <>
      <Horizontal>
        {menuData[2].list.map((el, idx) => (
          <Main key={idx}>{el.title}</Main>
        ))}
      </Horizontal>
    </>
  );
};

export const SubBar = () => {};
