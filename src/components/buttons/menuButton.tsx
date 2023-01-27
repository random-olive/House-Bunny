import styled from 'styled-components';
import ButtonSize from 'src/constants/size';

const Base = styled.button`
  font-family: 'KyoboHand';
  border: 3px solid ${(props) => props.theme.color['--menu-selected']};
  font-weight: 700;
  border-radius: 6px;
  height: 50px;
  width: 83px;
`;

export const Main = styled(Base)`
  background: ${(props) => props.theme.color['--white']};
  color: ${(props) => props.theme.color['--menu-text']};
`;

export const Selected = styled(Base)`
  background: ${(props) => props.theme.color['--menu-selected']};
  color: ${(props) => props.theme.color['--menu-text']};
`;
