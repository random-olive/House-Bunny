import { Horizontal, Vertical } from 'components/atoms/Bindings';
import { HomeLogo, MenuLogo } from 'components/atoms/Logos';
import { LogoContainer } from 'components/atoms/Container';
import Searchbar from 'components/molecules/SearchBar';
import { RESPONSIVE } from 'constants/styleText';
import { DropdownBar } from 'components/molecules/MenuBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ClickProp {
  onClick?: () => void;
  pMainMenu?: any;
}

export const BarSet = () => {
  return (
    <Horizontal>
      <HomeLogo />
      <Searchbar />
    </Horizontal>
  );
};

export const DropdownBarSet = ({pMainMenu}: ClickProp) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const toggle = () => {
    setMenuActive(!menuActive);
    // console.log(menuActive);
  };
  const inActivate = () => {
    setMenuActive(false);
  };

  return (
    <Vertical>
      <LogoContainer>
        <Link to='/'>
          <HomeLogo
            margin={window.outerWidth < 768 ? '0' : RESPONSIVE.HEADER_MARGIN}
          />
        </Link>

        <MenuLogo onClick={toggle} />
        {window.outerWidth < 768 ? (
          <DropdownBar
            display={menuActive ? 'block' : 'none'}
            inActivate={inActivate}
            pMainMenu={pMainMenu}
          />
        ) : (
          ''
        )}
      </LogoContainer>

      <Searchbar />
    </Vertical>
  );
};
