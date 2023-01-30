import styled from 'styled-components';
import ButtonSize from 'src/constants/size';

export const Slide = styled.button`
  font-family: 'KyoboHand';
  border: none;
  border: 3px solid ${(props) => props.theme.color['--menu-selected']};
  font-weight: 700;
  border-radius: 6px;
  height: 50px;
  width: 83px;
`;
