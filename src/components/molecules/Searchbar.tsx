import { SearchPart } from 'components/atoms/Bars';
import { Square } from 'components/atoms/Buttons';
import { Horizontal } from 'components/atoms/Bindings';

const Searchbar = () => {
  return (
    <Horizontal>
      <SearchPart />
      <Square />
    </Horizontal>
  );
};

export default Searchbar;
