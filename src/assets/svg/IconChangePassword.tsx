import { getSvgSize } from '@/utils/sizeHelper';
import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

const IconChangePassword = (props: SvgProps) => (
  <Svg
    viewBox="0 0 28 28"
    fill="none"
    {...props}
    {...getSvgSize(28, 28, props.width)}
  >
    <Rect width="28" height="28" rx="8" fill="#FC9C10" />
    <Path
      d="M10 12V10C10 7.8125 11.7812 6 14 6C16.1875 6 18 7.8125 18 10V12H19C20.0938 12 21 12.9062 21 14V20C21 21.125 20.0938 22 19 22H9C7.875 22 7 21.125 7 20V14C7 12.9062 7.875 12 9 12H10ZM11.5 12H16.5V10C16.5 8.625 15.375 7.5 14 7.5C12.5938 7.5 11.5 8.625 11.5 10V12ZM8.5 20C8.5 20.2812 8.71875 20.5 9 20.5H19C19.25 20.5 19.5 20.2812 19.5 20V14C19.5 13.75 19.25 13.5 19 13.5H9C8.71875 13.5 8.5 13.75 8.5 14V20Z"
      fill="white"
    />
  </Svg>
);

export default IconChangePassword;
