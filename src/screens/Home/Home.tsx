import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {CardOption} from '../../components/organisms/CardOption/CardOption';
import backgroundImage from '../../assets/images/png/Background.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Style} from './Home.style';
import Header from '../../components/organisms/Header/Header';
import {Label} from '../../components/atoms/Label/Label';
import {Theme} from '../../Theme';
import GradientLine from '@components/atoms/GradientLine/GradientLine';
import {IconRounded} from '@components/molecules/IconRounded/IconRounded';
import Lightning from '@assets/images/svg/Lightning';
import Money from '@assets/images/svg/Money';
import LightBulb from '@assets/images/svg/LightBulb';
import Temperature from '@assets/images/svg/Temperature';
import Appliance from '@assets/images/svg/Appliance';
import WifiSystem from '@assets/images/svg/WifiSystem';

export function HomeScreen(): React.JSX.Element {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };
  return (
    <ImageBackground source={backgroundImage} style={Style.homeContainer}>
      <SafeAreaView style={Style.flexibleContainer}>
        <ScrollView>
          <View style={Style.contentContainer}>
            <Header
              name={'Cíntia'}
              deviceNumber={6}
              notificationAction={() => console.log('clicked')}
            />
            {/* <CardOption title={'Lighting'} subTitle="1 device"></CardOption> */}
            <View style={{gap: 16, paddingHorizontal: 20}}>
              <View style={Style.contentDescription}>
                <Label args={Theme.text.bodyEmphasized}>
                  Current energy usage
                </Label>
                <Label args={Theme.text.bodyMedium}>
                  {formatTime(currentTime)}
                </Label>
              </View>
              <View style={{gap: 8}}>
                <Label
                  color={Theme.colors.dark.lightBlue}
                  args={Theme.text.titleEmphasized}>
                  2.1 kW
                </Label>
                <Label
                  color={Theme.colors.dark.foregroundSecondary}
                  args={Theme.text.bodyMedium}>
                  Your home`s power draw at this moment.
                </Label>
              </View>
              <GradientLine />
              <View style={Style.usageInfoContainer}>
                <View>
                  <View style={Style.usageDescriptionContainer}>
                    <IconRounded iconSVG={<Lightning />} size={48} />
                    <View>
                      <Label args={Theme.text.titleEmphasized}>48 kWh</Label>
                      <Label
                        args={Theme.text.calloutRegular}
                        color={Theme.colors.dark.foregroundSecondary}>
                        24-Hr usage
                      </Label>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={Style.usageDescriptionContainer}>
                    <IconRounded iconSVG={<Money height={20} />} size={48} />
                    <View>
                      <Label args={Theme.text.titleEmphasized}>$5.20</Label>
                      <Label
                        args={Theme.text.calloutRegular}
                        color={Theme.colors.dark.foregroundSecondary}>
                        Estimated cost
                      </Label>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={Style.cardsContainer}>
              <CardOption
                title={'Lighting'}
                subTitle="8 devices"
                icon={<LightBulb />}></CardOption>
              <CardOption
                title={'Thermostat'}
                subTitle="2 devices"
                icon={<Temperature />}></CardOption>
              <CardOption
                title={'Appliances'}
                subTitle="4 devices"
                icon={<Appliance />}></CardOption>
              <CardOption
                title={'Wireless Devices'}
                subTitle="7 devices"
                icon={<WifiSystem />}></CardOption>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
