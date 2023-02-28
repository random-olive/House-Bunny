import { LOGO, RESPONSIVE } from 'constants/styleText';
import styled from 'styled-components';
import iconPath from '../../assets/icons.png';

type logoType = {
  margin?: string;
};

//homeLogo
const BaseLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* border: 1px solid red; */
  background: '';
  background-position: 0px;
  width: 0;
  height: 0;
  margin: 0;
`;

export const HomeLogo = styled(BaseLogo)<logoType>`
  position: relative;
  top: 5px;
  background: url(${iconPath});
  /* border: 1px solid red; */
  background-position: 1px 0px;
  width: ${LOGO.HOME_WIDTH};
  height: ${LOGO.HOME_HEIGHT};
  /* margin: ${LOGO.HOME_MARGIN}; */
  margin: ${(props) => props.margin || '0'};
  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    width: 50px;
    height: 50px;
    background-position: 0 -17px;
  }
`;

export const MenuLogo = styled(HomeLogo)<logoType>`
  display: none;
  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    display: block;
    top: 5px;
    left: -20px;
    width: 98px;
    height: 60px;
    background-position: -47px -15px;
  }
`;
