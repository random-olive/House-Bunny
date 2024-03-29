import styled from 'styled-components';
import { DEFAULT, BUTTON, RESPONSIVE } from '../../constants/styleText';

interface ButtonProps {
  selected?: any;
  idx?: number;
  linkable?: boolean;
  listStyle?: string;
}

export const Base = styled.button<ButtonProps>`
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

export const Main = styled(Base)<ButtonProps>`
  background: ${(props) => props.theme.color['--menu']};
  color: ${(props) => props.theme.color['--text-selected']};

  border-radius: 1px;
  margin: 5px 0 0 0;

  &:hover {
    background: ${(props) => props.theme.color['--menu-selected']};
    color: ${(props) =>
      props.idx === 1
        ? props.theme.color['--icon-heart-warm']
        : props.theme.color['--text']};
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 0 0 0 0;
    background: ${(props) => props.theme.color['--white']};
    color: ${(props) => props.theme.color['--section-line']};

    box-shadow: ${DEFAULT.BOX_SHADOW};
    /* border-top:1px solid red; */
    &:hover {
      background: ${(props) => props.theme.color['--pink-back-light']};
      color: ${(props) => props.theme.color['--pink-menu-selected']};
    }
  }

  //sub 메뉴가 존재하는 경우
  .sub {
    display: none;
  }
  &:hover .sub {
    display: block;
    position: absolute;
    margin: 14px 0 0px -6px;
    width: ${BUTTON.BASIC_WIDTH};
    height: ${BUTTON.BASIC_HEIGHT}+0;
    background: ${(props) => props.theme.color['--white']};
    transition: all 0.3s ease-out;
    color: ${(props) => props.theme.color['--text-light-orange']};
    z-index: 1000;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border-radius: ${DEFAULT.BORDER_RADIUS};
      transition: all 0.3s ease-out;
      &:hover {
        background: ${(props) => props.theme.color['--pink-selected']};
        color: ${(props) => props.theme.color['--text-orange']};
      }
    }
  }
`;

export const Sub = styled(Base)`
  margin: 10px 0 0 5px;
  height: 40px;
  background: ${(props) => props.theme.color['--white']};
  border-radius: ${DEFAULT.BORDER_RADIUS};

  transition: all 0.3s ease-out;
  color: ${(props) => props.theme.color['--text-light-orange']};

  &:focus {
    background: ${(props) => props.theme.color['--pink-selected']};
    color: ${(props) => props.theme.color['--text-orange']};
  }

  @media screen and (max-width: ${RESPONSIVE.MENU_PX}) {
    width: 60px;
  }
`;

export const Sub2 = styled(Sub)`
  background: white;
  height: 40px;
  &:focus {
    background: ${(props) => props.theme.color['--sub-selected']};
    color: ${(props) => props.theme.color['--text-orange']};
  }

  /* background: selected.idx2 === idx ? red : salmon; */
`;

export const Sub3 = styled(Sub2)`
  height: 25px;
  &:focus {
    background: ${(props) => props.theme.color['--sub-selected2']};
    color: ${(props) => props.theme.color['--text-orange']};
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

export const Tip = styled.div`
  display: flex;
  justify-content: right;
  color: ${(props) => props.theme.color['--text-orange']};
  div {
    &:hover {
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export const A = styled.a<ButtonProps>`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color['--text-orange']};
    font-weight: 700;
  }

  pointer-events: ${(props) => (props.linkable ? 'inherit' : 'none')};
`;

export const Li = styled.li<ButtonProps>`
  list-style: ${(props) => props.listStyle || 'disc'};
`;

export const Clear = styled.button`
  border: none;
  background: none;
  margin-left: 5px;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    transition: 0.3s all ease-out;
    box-shadow: 1px 2px 2px
      ${(props) => props.theme.color['--member-icon-bunny']};
  }
`;

export const Img = styled.img`
  width: 100%;
`;
