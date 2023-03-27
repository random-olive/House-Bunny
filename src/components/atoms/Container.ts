import { RESPONSIVE, SECTION } from 'constants/styleText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type ContainerType = {
  display?: string;
};

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    justify-content: space-between;
    width: ${RESPONSIVE.MENU_WIDTH};
    background: ${(props) => props.theme.color['--pink-back-light']};
    border: 4px solid ${(props) => props.theme.color['--pink-back-light']};

    &:hover {
      background: ${(props) => props.theme.color['--pink-menu-back']};
      border: 4px solid ${(props) => props.theme.color['--pink-menu-back']};
    }
  }
`;

export const MenuContainer = styled.div<ContainerType>`
  position: absolute;
  display: ${(props) => props.display || 'none'};
  top: ${RESPONSIVE.MENU_POSITION_TOP};
  left: ${RESPONSIVE.MENU_POSITION_LEFT};
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;


export const SubMenuContainer = styled.div`
  display: flex;
  .part {
    display: flex;
    width: ${SECTION.ADV_WIDTH};
  }
  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    .part {
      width: ${RESPONSIVE.ADV_WIDTH};
    }
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
