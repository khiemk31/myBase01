import {Colors, DarkColors} from './Colors';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import images from '../res/images';
export const getAppTheme = () => ({
  default: {
    Colors,
    Images: images,
    NavigationTheme: DefaultTheme,
  },
  dark: {
    Colors: DarkColors,
    Images: images,
    NavigationTheme: DarkTheme,
  },
});
