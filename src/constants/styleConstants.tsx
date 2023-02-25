import { myTheme } from 'styles/theme/DefaultTheme';

export const DEFAULT = {
  BORDER_RADIUS: '3px',
  FONT_WEIGHT: '600',
  MARGIN: '0 0 10px 0',
  TRANSITION: 'all 0.3s',
  BOX_SHADOW: `1px 2px 1px ${myTheme.color['--shadow']}`,
  MENU_MARGIN: '-10px 0 10px 0',
};

export const BUTTON = {
  //Basic
  BASIC_WIDTH: '76px',
  BASIC_HEIGHT: '50px',

  //Square & Circle
  SQUARE_SIZE: '47px',
  CIRCLE_SIZE: '55px',
} as const;

export const BAR = {
  //Searchbar
  SEARCH_WIDTH: '555px',
  SEARCH_HEIGHT: '40px',

  //Input
  INPUT_WIDTH: '480px',
  INPUT_HEIGHT: 'fit-content',
  INPUT_MARGIN: '0 0 0 10px',
};

export const LOGO = {
  //HomeLogo
  HOME_WIDTH: '150px',
  HOME_HEIGHT: '80px',
  HOME_MARGIN: '0 10px 0 0',
};

export const SECTION = {
  BORDER: '3px solid',
  MARGIN: '20px 0 0 0',
  PADDING: '20px',

  WIDTH: '565px',

  ADV_WIDTH: '607px',
  ADV_HEIGHT: '150px',

  MORE_MARGIN: '20px 0 25px 0',
  END_MARGIN: '20px 0 0 0',

  MAIN_HEIGHT: '350px',

  MORE_HEIGHT: '200px',
};

export const ICON_SIZE = {
  SEARCH: '47px',
  HOT_WIDTH: '80px',
  HOT_HEIGHT: '27px',
  MORE_WIDTH: '95px',
  MORE_HEIGHT: '30px',
};

export const RESPONSIVE = {
  SMALL_PX: '767px',
  MENU_PX:'496px',
 
  HEADER_MARGIN: '30px 0 0 0',

  MENU_POSITION_TOP: '58px',
  MENU_POSITION_LEFT: '0px',
  MENU_WIDTH: '98vw',
  SEARCH_WIDTH: '87vw',
  SECTION_WIDTH: '89vw',
  ADV_WIDTH: '99vw',
};

export const CONDITION = {
  SMALL: 'window.outerWidth < 768',
};
