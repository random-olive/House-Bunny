import styled from 'styled-components';

export const SearchPart = styled.div`
  font-family: 'KyoboHand';
  border: 3px solid ${(props) => props.theme.color['--menu-selected']};
  color: ${(props) => props.theme.color['--searchbar-icon']};
  border-radius: 6px;
  height: 40px;
  width: 500px;
`;
