import styled from 'styled-components';
import { DEFAULT, BAR } from '../../constants/style';


export const Input = styled.input`
  font-family: 'KyoboHand';
  font-weight: ${DEFAULT.FONT_WEIGHT};
  color: ${(props) => props.theme.color['--searchbar-icon']};
  border: none;
  outline: none;
  width: ${BAR.INPUT_WIDTH};
  width: 93%;
  height: ${BAR.INPUT_HEIGHT};
  margin: ${BAR.INPUT_MARGIN};
`;
