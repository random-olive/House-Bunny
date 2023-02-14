import { Horizontal, Vertical } from 'components/atoms/Bindings';
import { HomeLogo } from 'components/atoms/Logos';
import Searchbar from 'components/molecules/Searchbar';
import { RESPONSIVE } from 'constants/style';

export const Header = () => {
  return (
    <Horizontal>
      <HomeLogo />
      {/*메뉴 슬라이딩 되게 + 상수 정리*/}
      <Searchbar />
    </Horizontal>
  );
};

export const SmallHeader = () => {
  return (
    <Vertical>
      <HomeLogo
        margin={
          window.outerWidth > RESPONSIVE.PX_SMALL
            ? RESPONSIVE.HEADER_MARGIN
            : '0'
        }
      />
      <Searchbar />
    </Vertical>
  );
};
