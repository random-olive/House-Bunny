import { DEFAULT, FOOTER, SECTION } from 'constants/style';
import styled from 'styled-components';

const Footer = () => {
  return (
    <BackGround>
      Copyright ⓒ 2023 House Bunny. All rights are reserved.
    </BackGround>
  );
};

export default Footer;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: ${(props) => props.theme.color['--menu']};
  color: ${(props) => props.theme.color['--white']};
  margin: ${FOOTER.MARGIN};
`;
