import Color from 'color';
export const COLORS = {
  PRIMARY: '#01F7F7',

  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TRANSPARENT: 'transparent',
  BACKGROUND: '#1C1C1E',
  DISABLED: '#808080',
  TITLE: '#002D2D',
  ERROR: '#FF3B30',
  BACKGROUND_FADE: '#121212',
  CUSTOM: (c: string, opacity: number) => Color(c).fade(opacity).string(),
  PRIMARY_15: '#01F7F726',
  Linear_Ranking_1: '#001B43CC',
  Linear_Ranking_2: '#1C1C1E',
  BLACK_1: '#01F7F700',
  YELLOW_FBE86B: '#FBE86B',
  YELLOW_E6960B: '#E6960B',
};
