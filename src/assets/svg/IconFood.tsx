import { getSvgSize } from '@/utils/sizeHelper';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const IconFood = (props: SvgProps) => (
  <Svg
    viewBox="0 0 25 24"
    fill="none"
    {...props}
    {...getSvgSize(25, 24, props.width)}
  >
    <Path
      d="M18.125 0V20H16.125V13H12.125V6C12.125 4.4087 12.7571 2.88258 13.8824 1.75736C15.0076 0.632141 16.5337 0 18.125 0ZM16.125 2.53C15.295 3 14.125 4.17 14.125 6V11H16.125V2.53ZM6.125 11.9V20H4.125V11.9C2.99581 11.6691 1.98099 11.0554 1.25214 10.1625C0.523297 9.2697 0.125141 8.15255 0.125 7V1H2.125V8H4.125V1H6.125V8H8.125V1H10.125V7C10.1249 8.15255 9.7267 9.2697 8.99786 10.1625C8.26901 11.0554 7.25419 11.6691 6.125 11.9Z"
      fill={props.fill || '#DA135A'}
    />
  </Svg>
);

export default IconFood;
