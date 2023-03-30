import styled from 'styled-components';
import { Clear } from './Buttons';
import { RESPONSIVE } from 'constants/styleText';

export const Header = ({ toggleLocales }: any) => {
  //상태 기억
  return (
    <HeaderBack>
      <Clear onClick={() => toggleLocales('ko-KR')}>🇰🇷</Clear>
      <Clear onClick={() => toggleLocales('en-US')}>🇺🇸</Clear>
      <Clear onClick={() => toggleLocales('fr-FR')}>🇫🇷</Clear>
      <Clear onClick={() => toggleLocales('zh-CN')}>🇨🇳</Clear>
      <Clear onClick={() => toggleLocales('ja-JP')}>🇯🇵</Clear>
      <Clear onClick={() => toggleLocales('th-TH')}>🇹🇭</Clear>
      <Clear onClick={() => toggleLocales('vi-VN')}>🇻🇳</Clear>
    </HeaderBack>
  );
};

export const Footer = () => {
  return (
    <FooterBack>
      Copyright ⓒ 2023 House Bunny. All rights are reserved.
    </FooterBack>
  );
};

const BackGround = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: ${(props) => props.theme.color['--menu']};
  color: ${(props) => props.theme.color['--white']};
`;

const HeaderBack = styled(BackGround)`
  background: white;
  opacity: 0.6;
  top: 0;
  z-index: 2000;
  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    background: ${(props) => props.theme.color['--pink-back-light']};
  }
`;

const FooterBack = styled(BackGround)``;
