import { SearchPart } from 'components/atoms/Bars';
import { Square } from 'components/atoms/Buttons';
import { Horizontal } from 'components/atoms/Bindings';
import { Input } from 'components/atoms/Inputs';

const Searchbar = () => {
  return (
    <Horizontal>
      <SearchPart>
        <Input />
      </SearchPart>
      <Square>Q</Square>
    </Horizontal>
  );
};

export default Searchbar;
