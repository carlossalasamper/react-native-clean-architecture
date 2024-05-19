import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ICAchievement: ({
  width,
  height,
  ...props
}: {
  width: number;
  height: number;
} & SvgProps) => React.ReactNode = ({width, height, ...props}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      {...props}>
      <Path
        d="M37.665 3.12h-4.542V1.147a.396.396 0 00-.395-.395H7.45a.396.396 0 00-.395.395V3.12H2.513A2.172 2.172 0 00.341 5.293V12.6c0 4.034 2.962 7.386 6.823 7.998.765 5.737 5.372 10.254 11.148 10.886v5.194H8.635c-.874 0-1.58.706-1.58 1.58v1.595c0 .217.178.395.395.395h25.278a.396.396 0 00.395-.395v-1.595c0-.874-.706-1.58-1.58-1.58h-9.676v-5.194c5.776-.632 10.382-5.149 11.148-10.886 3.86-.612 6.823-3.964 6.823-7.998V5.293a2.172 2.172 0 00-2.173-2.172zM3.895 12.6V6.675h3.16v10.25a4.542 4.542 0 01-3.16-4.325zm25.674 6.32c0 2.424-.944 4.71-2.662 6.423a9.023 9.023 0 01-6.423 2.66h-.79a9.014 9.014 0 01-6.423-2.66 9.023 9.023 0 01-2.661-6.424V4.306h18.959v14.613zm6.714-6.32a4.541 4.541 0 01-3.16 4.325V6.675h3.16V12.6z"
        fill={props.color}
      />
    </Svg>
  );
};

export default ICAchievement;
