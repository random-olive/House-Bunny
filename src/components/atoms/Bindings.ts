import styled from 'styled-components';
import { DEFAULT } from 'constants/styleConstants';

type BindingType = {
  margin?: string;
};

export const Horizontal = styled.div<BindingType>`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || DEFAULT.MARGIN};
`;

export const Vertical = styled(Horizontal)`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  margin: 0;
`;
