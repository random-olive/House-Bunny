import { Horizontal } from 'components/atoms/Bindings';
import { HomeLogo } from 'components/atoms/Logos';
import Searchbar from 'components/molecules/Searchbar';

const Header = () => {
  return (
    <>
      <Horizontal>
        <HomeLogo />
        <Searchbar />
      </Horizontal>
    </>
  );
};

export default Header;
