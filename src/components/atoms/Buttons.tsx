import styled from 'styled-components';
import ButtonSize from 'src/constants/size';

export const Base = styled.button`
  font-family: 'KyoboHand';
  border: none;
  /* border: 3px solid ${(props) => props.theme.color['--menu-selected']}; */
  font-weight: 700;
  border-radius: 6px;
  height: 50px;
  width: 83px;
`;

export const Circle = styled.button`
  height: 50px;
  width: 50px;
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
  height: 45px;
  width: 45px;
  background: ${(props) => props.theme.color['--searchbar-line']};
`;

export const Sticky = styled(Circle)`
  background: 'red';
`;
