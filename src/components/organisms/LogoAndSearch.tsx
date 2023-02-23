import { Horizontal, Vertical } from 'components/atoms/Bindings';
import { HomeLogo, MenuLogo } from 'components/atoms/Logos';
import { LogoContainer } from 'components/atoms/Container';
import Searchbar from 'components/molecules/SearchBar';
import { RESPONSIVE } from 'constants/styleConstants';
import { DropdownBar } from 'components/molecules/MenuBar';
import { useState } from 'react';

interface ClickProp {
  onClick?: () => void;
}

export const Header = () => {
  return (
    <Horizontal>
      <HomeLogo />
      <Searchbar />
    </Horizontal>
  );
};

export const DropdownHeader: React.FC<ClickProp> = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const toggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Vertical>
      <LogoContainer onClick={toggle}>
        <HomeLogo
          margin={window.outerWidth < 768 ? '0' : RESPONSIVE.HEADER_MARGIN}
        />
        
        <MenuLogo />

        {window.outerWidth < 768 ? (
          <DropdownBar display={menuActive ? 'block' : 'none'} />
        ) : (
          ''
        )}
      </LogoContainer>
      <Searchbar />
    </Vertical>
  );
};
