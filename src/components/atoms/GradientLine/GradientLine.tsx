import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './GradientLine.styles';
import {Theme} from '../../../Theme';

export const GradientLine = () => {
  return (
    <LinearGradient
      colors={Theme.colors.dark.gradients.lineGradient.colors}
      start={Theme.colors.dark.gradients.lineGradient.start}
      end={Theme.colors.dark.gradients.lineGradient.end}
      style={styles.gradientLine}
    />
  );
};

export default GradientLine;
