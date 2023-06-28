import { getSvgSize } from '@/utils/sizeHelper';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const IconBuilding = (props: SvgProps) => (
  <Svg
    viewBox="0 0 25 24"
    fill="none"
    {...props}
    {...getSvgSize(25, 24, props.width)}
  >
    <Path
      d="M20.625 18H0.625V16H1.625V1C1.625 0.734784 1.73036 0.48043 1.91789 0.292893C2.10543 0.105357 2.35978 0 2.625 0H16.625C16.8902 0 17.1446 0.105357 17.3321 0.292893C17.5196 0.48043 17.625 0.734784 17.625 1V6H19.625V16H20.625V18ZM15.625 16H17.625V8H11.625V16H13.625V10H15.625V16ZM15.625 6V2H3.625V16H9.625V6H15.625ZM5.625 8H7.625V10H5.625V8ZM5.625 12H7.625V14H5.625V12ZM5.625 4H7.625V6H5.625V4Z"
      fill={props.fill || '#FB8500'}
    />
  </Svg>
);

export default IconBuilding;
