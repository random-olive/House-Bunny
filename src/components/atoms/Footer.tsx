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
