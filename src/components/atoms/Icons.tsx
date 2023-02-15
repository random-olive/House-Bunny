import iconPath from '../../assets/icons.png';
import styled from 'styled-components';
import { ICON_SIZE } from 'constants/styleConstants';

type BackType = {
  top?: string;
  left?: string;
  background?: string;
  width?: string;
  height?: string;
};

const BaseIcon = styled.div`
  background: url(${iconPath});
  margin: 0;
  width: 0px;
  height: 0px;
  background-position: 0px 0px;
`;

export const SearchIcon = styled(BaseIcon)`
  margin: 0 0 0 -8px;
  width: ${ICON_SIZE.SEARCH};
  height: ${ICON_SIZE.SEARCH};
  background-position: 57px 55px;
`;

//Title Icon
const TitleIcon = styled.div<BackType>`
  background: url(${iconPath});
  position: absolute;
  top: -17px;
  left: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const BackIcon = styled(TitleIcon)`
  background: white;
`;

export const HotIcon = styled(TitleIcon)`
  width: ${ICON_SIZE.HOT_WIDTH};
  height: ${ICON_SIZE.HOT_HEIGHT};
  background-position: -146px 86px;
`;

export const MoreIcon = styled(TitleIcon)`
  width: ${ICON_SIZE.MORE_WIDTH};
  height: ${ICON_SIZE.MORE_HEIGHT};
  background-position: -220px 88px;
`;
