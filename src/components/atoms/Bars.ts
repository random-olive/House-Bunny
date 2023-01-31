import styled from 'styled-components';
import { DEFAULT, BAR } from '../../constants/style';

export const SearchPart = styled.div`
  display: flex;
  align-items: center;
  font-family: 'KyoboHand';
  border: 3px solid ${(props) => props.theme.color['--menu-selected']};
  color: ${(props) => props.theme.color['--searchbar-icon']};
  border-radius: ${DEFAULT.BORDER_RADIUS};
  width: ${BAR.SEARCH_WIDTH};
  height: ${BAR.SEARCH_HEIGHT};
`;
