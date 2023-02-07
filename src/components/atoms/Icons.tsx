import iconPath from '../../assets/icons.png';
import styled from 'styled-components';

const BaseIcon = styled.div`
  background: url(${iconPath});
  margin: 0;
  width: 0px;
  height: 0px;
  background-position: 0px 0px;
`;

export const SearchIcon = styled(BaseIcon)`
  margin: 0 0 0 -8px;
  width: 47px;
  height: 47px;
  background-position: 57px 55px;
`;
