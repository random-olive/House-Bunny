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

export const ContentsBinding = styled.div`
  display: flex;
  h3 {
    margin-top: 23px;
    margin-right: 210px;
    @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
      margin-right: 20vw;
    }
  }
`;

export const PartBinding = styled.div`
  display: flex;
  text-align: left;
  h2 {
    margin-right: 10px;
    color: ${(props) => props.theme.color['--text-light-orange']};
  }
  h3 {
    color: ${(props) => props.theme.color['--text']};
  }
`;


