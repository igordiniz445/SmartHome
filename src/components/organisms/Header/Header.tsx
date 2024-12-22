import React from 'react';
import {Image, Touchable, TouchableOpacity, View} from 'react-native';
import {ComponentWithChildren} from 'Utils/Types';
import {Style} from './Header.style';
import AvatarImage from '../../../assets/images/png/AvatarImage.png';
import {Label} from '../../../components/atoms/Label/Label';
import {Theme} from '../../../Theme';
import Notification from '../../../assets/images/svg/Notification';
type HeaderProps = ComponentWithChildren<{
  name: string;
  deviceNumber: number;
  notificationAction: () => void;
}>;

export default function Header(props: HeaderProps): React.JSX.Element {
  return (
    <View style={Style.headerContainer}>
      <View style={Style.headerContent}>
        <View style={Style.imageContainer}>
          <Image source={AvatarImage} style={Style.imageAvatar} />
        </View>
        <View style={Style.description}>
          <Label color={Theme.colors.dark.white} args={Theme.text.title}>
            Welcome, {props.name}
          </Label>
          <Label color={Theme.colors.dark.foregroundSecondary}>
            You have {props.deviceNumber} device{props.deviceNumber > 1 && 's'}{' '}
            currently on
          </Label>
        </View>
      </View>
      <TouchableOpacity>
        <View style={Style.notification}>
          <Notification fillColor={Theme.colors.dark.foregroundSecondary} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
