import { Horizontal } from 'components/atoms/Bindings';
import { SearchPart } from 'components/atoms/Bars';
import { Input } from 'components/atoms/Inputs';
import { Square } from 'components/atoms/Buttons';
import { SearchIcon } from 'components/atoms/Icons';

const SearchBar = () => {
  return (
    <Horizontal>
      <SearchPart>
        <Input />
      </SearchPart>

      <Square>
        <SearchIcon />
      </Square>
    </Horizontal>
  );
};

export default SearchBar;
