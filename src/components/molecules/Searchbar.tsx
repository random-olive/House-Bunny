import { SearchPart } from 'components/atoms/Bars';
import { Square } from 'components/atoms/Buttons';
import { Horizontal } from 'components/atoms/Bindings';
import { Input } from 'components/atoms/Inputs';
import { SearchIcon } from 'components/atoms/Icons';
import styled from 'styled-components';

const Searchbar = () => {
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

export default Searchbar;
