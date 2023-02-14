import { LOGO } from 'constants/style';
import styled from 'styled-components';
import iconPath from '../../assets/icons.png';

type logoType = {
  margin?: string;
}

//homeLogo
const BaseLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  /* border: 1px solid red; */
  background: '';
  background-position: 0px;
  width: 0;
  height: 0;
  margin: 0;
 
`;

export const HomeLogo = styled(BaseLogo)<logoType>`
  background: url(${iconPath});
  /* border: 1px solid red; */
  background-position: 1px 0px;
  width: ${LOGO.HOME_WIDTH};
  height: ${LOGO.HOME_HEIGHT};
  /* margin: ${LOGO.HOME_MARGIN}; */
  margin: ${props=>props.margin || '0'}
`;
