import styled from 'styled-components';
import { DEFAULT, BUTTON } from '../../constants/style';

export const Base = styled.button`
  font-family: 'KyoboHand';
  border: none;
  /* border: 3px solid ${(props) => props.theme.color['--menu-selected']}; */
  font-weight: ${DEFAULT.FONT_WEIGHT};
  border-radius: ${DEFAULT.BORDER_RADIUS};
  width: ${BUTTON.BASIC_WIDTH};
  height: ${BUTTON.BASIC_HEIGHT};
  cursor: pointer;
`;

export const Circle = styled(Base)`
  border-radius: 100%;
  height: ${BUTTON.CIRCLE_SIZE};
  width: ${BUTTON.CIRCLE_SIZE};
`;

export const Main = styled(Base)`
  background: ${(props) => props.theme.color['--menu']};
  color: ${(props) => props.theme.color['--text-selected']};
  border-radius: 1px;
  &:hover {
    background: ${(props) => props.theme.color['--menu-selected']};
    color: ${(props) => props.theme.color['--text']};
    cursor: pointer;
  }
`;

export const MainWithSlide = styled(Base)`
  background: ${(props) => props.theme.color['--white']};
  color: ${(props) => props.theme.color['--menu-text']};
  &:hover {
    /* border-bottom: 3px solid ${(props) =>
      props.theme.color['--menu-selected-line']}; */
    /* border-radius: 0px; */
    color: ${(props) => props.theme.color['--text']};
    cursor: pointer;
  }
`;

export const Square = styled(Base)`
  width: ${BUTTON.SQUARE_SIZE};
  height: ${BUTTON.SQUARE_SIZE};
  background: ${(props) => props.theme.color['--searchbar-line']};
  color: ${(props) => props.theme.color['--searchbar-icon']};
  font-weight: 900;
`;

export const Sticky = styled(Circle)`
  background: ${(props) => props.theme.color['--sticky-body']};
  border: 5px solid ${(props) => props.theme.color['--sticky-line']};
`;

export const Member = styled(Circle)`
  background: ${(props) => props.theme.color['--member-icon-body']};
  border: 5px solid ${(props) => props.theme.color['--member-icon-line']};
`;
