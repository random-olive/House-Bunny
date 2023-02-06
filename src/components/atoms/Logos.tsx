import { LOGO } from 'constants/style';
import styled from 'styled-components';
import iconPath from '../../assets/icons.png';
//homeLogo

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  background: '';
  background-position: 0px;
  width: 0;
  height: 0;
  margin: 0;
`;

export const HomeLogo = styled(Base)`
  background: url(${iconPath});
  background-position: 1px 0px;
  width: ${LOGO.HOME_WIDTH};
  height: ${LOGO.HOME_HEIGHT};
  margin: ${LOGO.HOME_MARGIN};
`;
