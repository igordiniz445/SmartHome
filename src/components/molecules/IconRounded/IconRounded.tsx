import React from 'react';
import {View} from 'react-native';
import {Theme} from '../../../Theme';
import {Style} from './IconRounded.style';

type IconRounded = {
  iconSVG: React.JSX.Element;
  backGroundColor?: string;
  borderColor?: string;
  children?: React.JSX.Element;
  size?: number;
};
export function IconRounded(props: IconRounded): React.JSX.Element {
  const {
    borderColor = Theme.colors.dark.lightBlue,
    backGroundColor = Theme.colors.dark.backgroundDarkBlue,
    iconSVG,
    size = 40,
  } = props;
  const width = size;
  const height = size;
  return (
    <View
      style={[
        Style.container,
        {
          width: width,
          height: height,
          borderColor: borderColor,
          backgroundColor: backGroundColor,
        },
      ]}>
      {iconSVG}
    </View>
  );
}
