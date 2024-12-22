import Svg, {Path} from 'react-native-svg';

type LightningProps = {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  fillColor?: string;
};
const Lightning = ({
  width = 14,
  height = 21,
  backgroundColor = 'none',
  fillColor = 'white',
}: LightningProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={backgroundColor}>
      <Path
        d="M0.803711 11.6738C0.803711 11.4805 0.882812 11.3047 1.03223 11.1113L9.02148 1.13574C9.61035 0.388672 10.5508 0.87207 10.208 1.77734L7.58887 8.89648H12.5547C12.9238 8.89648 13.1875 9.16016 13.1875 9.49414C13.1875 9.69629 13.1084 9.87207 12.959 10.0566L4.96973 20.041C4.38086 20.7793 3.44043 20.2959 3.7832 19.3906L6.40234 12.2715H1.43652C1.06738 12.2715 0.803711 12.0166 0.803711 11.6738Z"
        fill={fillColor}
      />
    </Svg>
  );
};

export default Lightning;
