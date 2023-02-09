import styled from 'styled-components';
import { DEFAULT } from 'constants/style';

export const Horizontal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${DEFAULT.MARGIN};
`;

export const Vertical = styled(Horizontal)`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

