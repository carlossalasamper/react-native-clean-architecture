import React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconProfile = ({
  width,
  height,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
    <Path
      d="M19.195 4.95008C23.165 8.92008 23.095 15.4 18.995 19.29C15.205 22.88 9.05496 22.88 5.25496 19.29C1.14496 15.4 1.07495 8.92008 5.05495 4.95008C8.95495 1.04008 15.295 1.04008 19.195 4.95008Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.9649 16.0703C13.8449 18.0703 10.4049 18.0703 8.29492 16.0703"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconProfile;
