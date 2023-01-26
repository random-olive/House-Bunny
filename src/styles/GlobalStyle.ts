import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// type GloblaStyleProps = {
//   children: React.ReactNode;
// };

export const GlobalStyle = createGlobalStyle`
${reset};
color:red;
`;
