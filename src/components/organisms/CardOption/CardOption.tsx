import React, {useState} from 'react';
import {Card} from '../../molecules/Card/Card';
import {View} from 'react-native';
import {IconRounded} from '../../molecules/IconRounded/IconRounded';
import Lighting from '../../../assets/images/svg/LightBulb';
import {Label} from '../../atoms/Label/Label';
import {Theme} from '../../../Theme';
import {Style} from './CardOption.style';
import {Switch} from '../../atoms/Switch/Switch';

type CardOptionProps = {
  icon: React.JSX.Element;
  title: String;
  subTitle: string;
  children?: React.JSX.Element;
};

export function CardOption({
  icon,
  title,
  subTitle,
  children,
}: CardOptionProps): React.JSX.Element {
  const [deviceStatus, setDeviceStatus] = useState<boolean>(false);

  function statusTitle() {
    return deviceStatus ? 'ON' : 'OFF';
  }
  function toggleSwitch(value: boolean) {
    setDeviceStatus(value);
  }
  return (
    <Card>
      <View style={Style.cardContainer}>
        <IconRounded iconSVG={icon} />
        <View style={Style.descriptionContainer}>
          <Label color={Theme.colors.dark.white}>{title}</Label>
          <Label color={Theme.colors.dark.foregroundSecondary}>
            {subTitle}
          </Label>
        </View>
        <View style={Style.line} />
        <View style={Style.status}>
          <Label color={Theme.colors.dark.white}>{statusTitle()}</Label>
          <Switch onToggle={toggleSwitch} initialStatus={deviceStatus} />
        </View>
      </View>
    </Card>
  );
}
