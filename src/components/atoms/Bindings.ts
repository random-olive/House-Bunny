import styled from 'styled-components';
import { SECTION, RESPONSIVE } from 'constants/styleText';
import React from 'react';
import { DEFAULT } from 'constants/styleText';

type BindingType = {
  margin?: string;
  wrap?: string;
  justifyContent?: string;
  children?: any;
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

export const VerticalFlex = styled(Vertical)`
  flex-wrap: wrap;
  justify-content: left;
`;

export const MenuBinding = styled(HorizontalFlex)<BindingType>`
  width: ${SECTION.ADV_WIDTH};
  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    width: ${RESPONSIVE.ADV_WIDTH};
  }
`;
