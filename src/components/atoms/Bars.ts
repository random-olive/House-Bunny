import styled from 'styled-components';
import { DEFAULT, BAR, RESPONSIVE } from '../../constants/styleText';

export const SearchPart = styled.div`
  display: flex;
  align-items: center;
  font-family: 'KyoboHand';
  border: 3px solid ${(props) => props.theme.color['--search-bar']};
  color: ${(props) => props.theme.color['--searchbar-icon']};
  border-radius: ${DEFAULT.BORDER_RADIUS};
  width: ${BAR.SEARCH_WIDTH};
  height: ${BAR.SEARCH_HEIGHT};

  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    width: ${RESPONSIVE.SEARCH_WIDTH};
  }
`;

