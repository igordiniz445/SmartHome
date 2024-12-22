import {FontType} from './Utils/Types';

export const Theme = {
  colors: {
    dark: {
      black: '#000000',
      white: '#FFFFFF',
      background: '#080B1C',
      foregroundPrimary: '#FFFFFF',
      foregroundSecondary: '#FFFFFFB3',
      foregroundTertiary: '#FFFFFF6F',
      containerBackground: '#0000007D',
      lightBlue: '#17B9FF',
      backgroundDarkBlue: '#21273D',
      extraDarkBlue: '#001D3D',
      darkBlue: '#012F61FF',
      borderBlueColor: '#17B9FF',
      gradients: {
        gradientPrimary: {
          colors: ['#FFFFFF00', '#FFFFFF'],
          start: {x: 0, y: 0},
          end: {x: 1, y: 1},
        },
        textGradientPrimary: {
          colors: ['#D6DEFF', '#B574AB', '#6E4291'],
          locations: [0, 0.67, 1],
          start: {x: 0, y: 0},
          end: {x: 1, y: 1},
        },
        textGradientSecondary: {
          colors: ['#D6DEFF', '#747EB5', '#6E4291'],
          locations: [0, 0.67, 1],
          start: {x: 0, y: 0},
          end: {x: 1, y: 1},
        },
        outlineContainer2: {
          colors: ['#17B9FF', '#001D3D'],
          start: {x: 0, y: 0},
          end: {x: 1, y: 1},
        },
        backgroundGradient: {
          colors: ['#6A7DC3FF', '#21273D'],
          start: {x: 0, y: 0},
          end: {x: 1, y: 1},
        },
        lineGradient: {
          colors: ['#000033', '#17B9FF', '#000033'],
          start: {x: 0, y: 0.5},
          end: {x: 1, y: 0.5},
        },
      },
    },
    light: {},
  },
  text: {
    heading1: {
      fontFamily: 'serif',
      fontSize: 60,
      fontWeight: '600',
      lineHeight: 72,
    } as FontType,
    bodyLarge: {
      fontFamily: 'RobotoMono',
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 27,
    } as FontType,
    bodyEmphasized: {
      fontFamily: 'RobotoMono',
      fontSize: 22,
      fontWeight: 'bold',
      lineHeight: 27,
    } as FontType,
    bodyLargeMedium: {
      fontFamily: 'RobotoMono',
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 27,
    } as FontType,
    body: {
      fontFamily: 'RobotoMono',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    } as FontType,
    bodyMedium: {
      fontFamily: 'RobotoMono',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
    } as FontType,
    footnote: {
      fontFamily: 'RobotoMono',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    } as FontType,
    footnoteMedium: {
      fontFamily: 'RobotoMono',
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
    } as FontType,
    calloutRegular: {
      fontFamily: 'RobotoMono',
      fontSize: 16,
      fontWeight: 'regular',
      lineHeight: 22,
    } as FontType,
    caption: {
      fontFamily: 'RobotoMono',
      fontSize: 13,
      fontWeight: '400',
      lineHeight: 18,
    } as FontType,
    captionMedium: {
      fontFamily: 'RobotoMono',
      fontSize: 13,
      fontWeight: '500',
      lineHeight: 18,
    } as FontType,
    title: {
      fontFamily: 'RobotoMono',
      fontSize: 20,
      fontWeight: 'semibold',
      lineHeight: 25,
    } as FontType,
    titleEmphasized: {
      fontFamily: 'RobotoMono',
      fontSize: 28,
      fontWeight: 'bold',
      lineHeight: 34,
    } as FontType,
  },
};
