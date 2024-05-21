import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const IconExplore = ({
  width,
  height,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
    <Circle
      cx="12.625"
      cy="12"
      r="10"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M13.649 14.5601C11.3392 15.484 10.1843 15.946 9.52464 15.4977C9.36824 15.3914 9.23334 15.2565 9.12706 15.1001C8.6788 14.4405 9.14075 13.2856 10.0647 10.9758C10.2617 10.4831 10.3603 10.2368 10.5297 10.0435C10.5729 9.99429 10.6193 9.94792 10.6685 9.90474C10.8618 9.73527 11.1081 9.63673 11.6008 9.43966C13.9106 8.51575 15.0655 8.0538 15.7251 8.50206C15.8815 8.60834 16.0164 8.74324 16.1227 8.89964C16.571 9.5593 16.109 10.7142 15.1851 13.024C14.988 13.5166 14.8895 13.763 14.72 13.9562C14.6768 14.0055 14.6305 14.0518 14.5812 14.095C14.388 14.2645 14.1416 14.363 13.649 14.5601Z"
      stroke="#121212"
      strokeWidth="1.5"
    />
  </Svg>
);

export default IconExplore;
