import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IconAccount = (props: SvgProps) => (
  <Svg
    viewBox="0 0 21 20"
    fill="none"
    {...props}
    {...getSvgSize(21, 20, props.width)}>
    <Path
      d="M10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20ZM5.513 16.256C6.92855 17.3877 8.68768 18.0029 10.5 18C12.47 18 14.273 17.288 15.667 16.108C15.0157 15.4397 14.2371 14.9089 13.377 14.5468C12.517 14.1847 11.5931 13.9988 10.66 14C9.69259 13.9989 8.7355 14.1989 7.84947 14.5872C6.96343 14.9756 6.16778 15.5439 5.513 16.256ZM4.116 14.82C4.95645 13.9281 5.97067 13.2177 7.09614 12.7327C8.22161 12.2477 9.43448 11.9984 10.66 12C11.8417 11.9985 13.012 12.2304 14.1037 12.6824C15.1955 13.1344 16.1873 13.7976 17.022 14.634C17.8781 13.4291 18.3836 12.0106 18.4826 10.5359C18.5815 9.06119 18.27 7.58789 17.5825 6.27946C16.895 4.97102 15.8585 3.87862 14.588 3.12345C13.3174 2.36827 11.8625 1.97984 10.3846 2.00125C8.90672 2.02267 7.46366 2.45308 6.21552 3.24476C4.96738 4.03643 3.96296 5.1584 3.31369 6.4862C2.66442 7.814 2.39569 9.29571 2.53732 10.7669C2.67894 12.2382 3.22537 13.6414 4.116 14.821V14.82ZM10.5 11C9.43913 11 8.42172 10.5786 7.67157 9.82843C6.92143 9.07828 6.5 8.06087 6.5 7C6.5 5.93913 6.92143 4.92172 7.67157 4.17157C8.42172 3.42143 9.43913 3 10.5 3C11.5609 3 12.5783 3.42143 13.3284 4.17157C14.0786 4.92172 14.5 5.93913 14.5 7C14.5 8.06087 14.0786 9.07828 13.3284 9.82843C12.5783 10.5786 11.5609 11 10.5 11ZM10.5 9C11.0304 9 11.5391 8.78929 11.9142 8.41421C12.2893 8.03914 12.5 7.53043 12.5 7C12.5 6.46957 12.2893 5.96086 11.9142 5.58579C11.5391 5.21071 11.0304 5 10.5 5C9.96957 5 9.46086 5.21071 9.08579 5.58579C8.71071 5.96086 8.5 6.46957 8.5 7C8.5 7.53043 8.71071 8.03914 9.08579 8.41421C9.46086 8.78929 9.96957 9 10.5 9Z"
      fill={props.fill || '#3A3A3A'}
    />
  </Svg>
);

export default IconAccount;
