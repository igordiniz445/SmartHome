import React, {useState} from 'react';
import {
  ImageBackground,
  LayoutChangeEvent,
  View,
} from 'react-native';
import {Styles} from './Card.styles';
import Svg, {
  Defs,
  LinearGradient as SvgLinearGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import backgroundImage from '../../../assets/images/png/Background.png';

type CardProps = {
  backgroundColor?: string;
  children?: React.JSX.Element;
};
export function Card(props: CardProps): React.JSX.Element {
  const {children} = props;

  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const borderWidth = 4;

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    setDimensions({width, height});
  };

  return (
    <View style={Styles.cardContainer}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Svg
          height={dimensions.height + borderWidth}
          width={dimensions.width + borderWidth}>
          <Defs>
            <SvgLinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0%" stopColor="#17B9FF" />
              <Stop offset="100%" stopColor="#001D3D" />
            </SvgLinearGradient>
          </Defs>
          <Rect
            x={borderWidth / 2}
            y={borderWidth / 2}
            width={dimensions.width}
            height={dimensions.height}
            rx={20}
            fill="transparent"
            stroke="url(#grad)"
            strokeWidth={borderWidth}
          />
        </Svg>
      )}
      <ImageBackground
        source={backgroundImage}
        style={[Styles.cardContent, dimensions]}>
        <View style={Styles.cardInsideContent} onLayout={handleLayout}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
}
