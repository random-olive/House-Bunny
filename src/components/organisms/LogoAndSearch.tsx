import { Horizontal, Vertical } from 'components/atoms/Bindings';
import { HomeLogo } from 'components/atoms/Logos';
import Searchbar from 'components/molecules/SearchBar';
import { RESPONSIVE } from 'constants/styleConstants';
import { LogoSlideStyle } from 'components/atoms/ChangingStyle';
import { MenuBar, SmallMenuBar } from 'components/molecules/MenuBar';

export const Header = () => {
  return (
    <Horizontal>
      <HomeLogo />
      <Searchbar />
    </Horizontal>
  );
};

export const SmallHeader = () => {
  return (
    <Vertical>
      <LogoSlideStyle>
        <HomeLogo
          margin={window.outerWidth < 768 ? '0' : RESPONSIVE.HEADER_MARGIN}
        />
      </LogoSlideStyle>
      {window.outerWidth < 768 ? <SmallMenuBar /> : ''}
      <Searchbar />
    </Vertical>
  );
};
