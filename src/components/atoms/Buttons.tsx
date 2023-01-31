import styled from 'styled-components';
import { BUTTON } from '../../constants/style';

export const Base = styled.button`
  font-family: 'KyoboHand';
  border: none;
  /* border: 3px solid ${(props) => props.theme.color['--menu-selected']}; */
  font-weight: ${BUTTON.FONT_WEIGHT};
  border-radius: ${BUTTON.BORDER_RADIUS};
  width: ${BUTTON.WIDTH};
  height: ${BUTTON.HEIGHT};
`;

export const Circle = styled.button`
  height: ${BUTTON.SC};
  width: ${BUTTON.SC};
`;

export const Main = styled(Base)`
  background: ${(props) => props.theme.color['--white']};
  color: ${(props) => props.theme.color['--menu-text']};
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
    border-radius: 0px;
    color: ${(props) => props.theme.color['--text']};
    cursor: pointer;
  }
`;

export const Square = styled(Base)`
  height: ${BUTTON.SC};
  width: ${BUTTON.SC};
  background: ${(props) => props.theme.color['--searchbar-line']};
`;

export const Sticky = styled(Circle)``;
