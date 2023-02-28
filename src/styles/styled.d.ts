//스타일- 타입 선언 파일(.d.ts)
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      '--white': string;
      '--shadow': string;

      '--sub-selected': string;
      '--sub-selected2': string;

      '--text': string;
      '--text-selected': string;

      '--pink-back-light': string;
      '--pink-menu-back': string;
      '--pink-menu-selected': string;

      '--text-light-orange': string;
      '--text-orange': string;

      '--search-bar': string;
      '--pink-selected': string;

      '--menu': string;
      '--menu--deep':string;
      '--menu-selected': string; //+ line, submenu text
      '--menu-pick': string;

      '--menu-selected-light': string;
      '--menu-selected-line': string;
      '--menu-text': string;

      '--logo-sub': string;
      '--logo-main': string;

      '--section-line': string;
      '--section-header': string;
      '--font': string;

      '--icon-heart-warm': string;
      '--icon-heart-cool': string;

      '--sticky-line': string;
      '--sticky-body': #string;
      '--sticky-paw': string;
      '--sticky-hand': string;
      '--sticky-question': string;
      '--sticky-chat': string;

      '--member-icon-line': string; //+arrow, text
      '--member-icon-body': string;
      '--member-icon-bunny': string;

      '--carrot-head': string;
      '--carrot-body': string;
      '--carrot-line': string;

      '--pink-bunny-line': string;
      '--pink-bunny-pink': string;
      '--pink-bunny-eye': string;

      '--searchbar-line': string;
      '--searchbar-icon': string;
    };
  }
}
