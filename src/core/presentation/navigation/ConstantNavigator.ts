/**
 * Core stack
 */
export const STACK_NAVIGATOR = {
  AUTH_NAVIGATOR: 'AUTH_NAVIGATOR',
  HOME_NAVIGATOR: 'HOME_NAVIGATOR',
  TARGET_NAVIGATOR: 'TARGET_NAVIGATOR',
  PARENT_NAVIGATOR: 'PARENT_NAVIGATOR',
  CHILD_NAVIGATOR: 'CHILD_NAVIGATOR',
  /** AUTH */
  AUTH: {
    LOGIN_SCREEN: 'LOGIN_SCREEN',
  },
  HOME: {
    LESSON: 'LESSON_SCREEN',
  },
  /** EXPLORE */
  EXPLORE: {},
  /** LIBRARY */
  LIBRARY: {},
  /** PROFILE */
  PROFILE: {},
  /**
   * Tab name
   */
  BOTTOM_TAB_SCREENS: 'BOTTOM_TAB_SCREENS',
  BOTTOM_TAB: {
    HOME_TAB: 'HOME_TAB',
    TARGET_TAB: 'TARGET_TAB',
    PARENT_TAB: 'PARENT_TAB',
    CHILD_TAB: 'CHILD_TAB',
  },
};

/**
 * Config Navigator
 */
export const CONFIG = {
  HEADER: {
    NONE: 'none',
    FLOAT: 'float',
    SCREEN: 'screen',
  },
  HEADER_TITLE: {
    NONE: '',
  },
  HEADER_ALIGN: {
    LEFT: {
      headerTitleAlign: 'left',
    },
    CENTER: {
      headerTitleAlign: 'center',
    },
  },
  SWIPE_BACK: {
    FALSE: false,
  },
  FADE_SCREEN: {
    cardStyleInterpolator: ({current}: any) => ({
      cardStyle: {
        opacity: current.progress,
      },
    }),
  },
};
