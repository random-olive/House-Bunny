import styled from 'styled-components';
import { DEFAULT } from 'constants/style';

type BindingType = {
  margin?: string;
};

export const Horizontal = styled.div<BindingType>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || DEFAULT.MARGIN};
`;

export const Vertical = styled(Horizontal)`
  display: flex;
  flex-direction: column;
  margin: 0;
`;
