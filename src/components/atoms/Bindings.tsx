import styled from 'styled-components';

export const Horizontal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Vertical = styled(Horizontal)`
  display: flex;
  flex-direction: column;
`;
