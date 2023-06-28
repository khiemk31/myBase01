import { getSvgSize } from '@/utils/sizeHelper';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const IconShare = (props: SvgProps) => (
  <Svg
    viewBox="0 0 18 19"
    fill="none"
    {...props}
    {...getSvgSize(18, 19, props.width)}
  >
    <Path
      d="M17.75 4.5C17.75 6.57031 16.0703 8.25 14 8.25C12.8672 8.25 11.8516 7.78125 11.1484 6.96094L7.63281 8.71875C7.71094 8.99219 7.71094 9.26562 7.71094 9.5C7.71094 9.77344 7.71094 10.0469 7.63281 10.3203L11.1484 12.0391C11.8516 11.2578 12.8672 10.75 14 10.75C16.0703 10.75 17.75 12.4297 17.75 14.5C17.75 16.5703 16.0703 18.25 14 18.25C11.8906 18.25 10.25 16.5703 10.25 14.5C10.25 14.2656 10.25 13.9922 10.3281 13.7188L6.8125 11.9609C6.10938 12.7812 5.09375 13.25 4 13.25C1.89062 13.25 0.25 11.5703 0.25 9.5C0.25 7.42969 1.89062 5.75 4 5.75C5.09375 5.75 6.10938 6.25781 6.8125 7.03906L10.3281 5.32031C10.25 5.04688 10.25 4.77344 10.25 4.5C10.25 2.42969 11.8906 0.75 14 0.75C16.0703 0.75 17.75 2.42969 17.75 4.5ZM3.96094 11.375C5.01562 11.375 5.83594 10.5547 5.83594 9.5C5.83594 8.48438 5.01562 7.625 3.96094 7.625C2.94531 7.625 2.08594 8.48438 2.08594 9.5C2.08594 10.5547 2.94531 11.375 3.96094 11.375ZM14 2.625C12.9453 2.625 12.125 3.48438 12.125 4.5C12.125 5.55469 12.9453 6.375 14 6.375C15.0156 6.375 15.875 5.55469 15.875 4.5C15.875 3.48438 15.0156 2.625 14 2.625ZM14 16.375C15.0156 16.375 15.875 15.5547 15.875 14.5C15.875 13.4844 15.0156 12.625 14 12.625C12.9453 12.625 12.125 13.4844 12.125 14.5C12.125 15.5547 12.9453 16.375 14 16.375Z"
      fill={props.fill || '#B6B6B6'}
    />
  </Svg>
);

export default IconShare;
