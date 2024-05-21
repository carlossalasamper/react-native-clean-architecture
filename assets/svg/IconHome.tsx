import React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconHome = ({
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
      d="M3.23907 12.9579C2.85963 10.3208 2.66991 9.00229 3.21037 7.87495C3.75083 6.7476 4.90119 6.06234 7.20191 4.69181L8.58675 3.86687C10.676 2.62229 11.7207 2 12.875 2C14.0293 2 15.074 2.62229 17.1632 3.86687L18.5481 4.69181C20.8488 6.06234 21.9992 6.7476 22.5396 7.87495C23.0801 9.00229 22.8904 10.3208 22.5109 12.9579L22.2322 14.8952C21.7447 18.2827 21.501 19.9764 20.326 20.9882C19.1509 22 17.4276 22 13.9811 22H11.7689C8.32237 22 6.59909 22 5.42403 20.9882C4.24896 19.9764 4.00525 18.2827 3.51784 14.8952L3.23907 12.9579Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M9.875 16C10.7254 16.6303 11.7596 17 12.875 17C13.9904 17 15.0246 16.6303 15.875 16"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export default IconHome;
