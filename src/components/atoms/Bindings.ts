import styled from 'styled-components';
import { DEFAULT } from 'constants/styleConstants';

type BindingType = {
  margin?: string;
  wrap?: string;
  justifyContent?: string;
};

export const Horizontal = styled.div<BindingType>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || DEFAULT.MARGIN};
`;

export const HorizontalFlex = styled(Horizontal)`
  flex-wrap: wrap;
  justify-content: left;
`;

export const Vertical = styled(Horizontal)`
  display: flex;
  flex-direction: column;
  margin: 0;
`;
