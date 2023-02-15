import styled from 'styled-components';
import { RESPONSIVE } from 'constants/styleConstants';

export const LogoSlideStyle = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;


  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    width: ${RESPONSIVE.MENU_WIDTH};
    background: ${(props) => props.theme.color['--pink-back-light']};
    border: 4px solid ${(props) => props.theme.color['--pink-back-light']};
    &:hover {
      background: ${(props) => props.theme.color['--pink-menu-back']};
    }
  }
`;
