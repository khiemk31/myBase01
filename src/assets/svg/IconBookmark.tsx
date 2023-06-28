import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IconChat = (props: SvgProps) => (
  <Svg
    viewBox="0 0 16 21"
    fill="none"
    {...props}
    {...getSvgSize(16, 21, props.width)}>
    <Path
      d="M13.625 0.5H2.375C1.32031 0.5 0.5 1.35938 0.5 2.375V19.25C0.5 20.2266 1.51562 20.8125 2.375 20.3438L8 17.0625L13.5859 20.3438C14.4453 20.8125 15.5 20.2266 15.5 19.25V2.375C15.5 1.35938 14.6406 0.5 13.625 0.5ZM13.625 18.1562L8 14.875L2.375 18.1562V2.60938C2.375 2.49219 2.45312 2.375 2.57031 2.375H13.3516C13.5078 2.375 13.625 2.49219 13.625 2.60938V18.1562Z"
      fill={props.fill || '#B6B6B6'}
    />
  </Svg>
);

export default IconChat;
