import {Text} from 'react-native';
import {FontType} from '../../../Utils/Types';
import {Theme} from '../../../Theme';

type LabelProps = {
  children: React.ReactNode;
  args?: FontType;
  color?: string;
};

export function Label({
  children,
  args = Theme.text.bodyMedium,
  color = Theme.colors.dark.white,
}: LabelProps): React.JSX.Element {
  return (
    <Text
      style={{
        fontFamily: args.fontFamily,
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        lineHeight: args.lineHeight,
        color: color,
      }}>
      {children}
    </Text>
  );
}
