import styled from 'styled-components';

type TextType = {
  color?: string;
};

export const H1 = styled.h1<TextType>`
  color: ${(props) => props.color || props.theme.color['--menu--deep']};
`;
