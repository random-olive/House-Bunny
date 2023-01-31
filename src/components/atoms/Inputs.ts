import styled from 'styled-components';
import { BAR } from '../../constants/style';

export const Input = styled.input`
  border: none;
  outline: none;
  width: ${BAR.INPUT_WIDTH};
  height: ${BAR.INPUT_HEIGHT};
  margin: ${BAR.INPUT_MARGIN};
  color: ${(props) => props.theme.color['--searchbar-icon']};
  font-family: 'KyoboHand';
`;
