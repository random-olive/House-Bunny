import iconPath from '../../assets/icons.png';
import styled from 'styled-components';
import { TbArrowBigLeftFilled } from 'react-icons/tb';
import { ICON_SIZE } from 'constants/styleText';

type BackType = {
  top?: string;
  left?: string;
  background?: string;
  width?: string;
  height?: string;
};

type RIType = {
  size?: number | undefined;
  fill?: string | undefined;
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

export const BackgroundIcon = styled(TitleIcon)`
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

export const StickyIcon = styled(TitleIcon)`
  position: fixed;
  top: 85%;
  left: 85%;
  z-index: 1000;
  width: 58px;
  height: 59px;
  cursor: pointer;
  background-position: 195px 59px;
  margin: 0 0 70px 0;
  @media screen and (max-height: 584px) {
    top: 83%;
  }
`;

export const HelpIcon = styled(StickyIcon)`
  display: block;
  top: 86%;
  left: 90%;
  width: 45px;
  height: 53px;
  background-position: 130px 55px;
  margin: 0;
`;

export const BackIcon = ({ size, fill }: RIType) => {
  return <TbArrowBigLeftFilled size={size || 35} color={fill || '#f0ae9e'} />;
};

export const UpIcon = styled(StickyIcon)`
  position: absolute;
  top: 9px;
  left: 65px;
  width: 15px;
  height: 15px;
  background-position: 80px 36px;
  transform: rotate(0.5turn);
  @media screen and (max-width: 584px) {
    top: 13px;
    left: -20px;
  }
`;

export const DownIcon = styled(UpIcon)`
  top: 35px;
  transform: rotate(0turn);
`;
