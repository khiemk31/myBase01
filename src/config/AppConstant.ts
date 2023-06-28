import {Dimensions, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';
import images from '../res/images';

export const forTablet = isTablet();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const UI_WIDTH = forTablet ? 834 : 375;

export function appSize(size: number) {
  const wSize = windowWidth > windowHeight ? windowHeight : windowWidth;
  return Math.round((wSize * size) / UI_WIDTH);
}

export function appFontSize(size: number) {
  const wSize = windowWidth < windowHeight ? windowWidth : windowHeight;
  const value = Math.round((wSize * size) / UI_WIDTH);
  return forTablet ? 1.05 * value : value;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const AppConstant = {
  UI_WIDTH,
  WIDTH: windowWidth,
  HEIGHT: windowHeight,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  IS_IOS: Platform.OS === 'ios',
  SMALL_DEVICE: windowWidth <= 375,
  LIST_SIZE: 12,
  // SESSION: {
  //   LANGUAGE: 'SESSION_language',
  //   TOKEN: 'SESSION_token',
  //   SIGN_OUT: 'SESSION_signOut',
  // },
  IS_TABLET: forTablet,
  MODAL_MAX_WIDTH: appSize(834),
  NO_IMAGE: images.noImage,
};

export default AppConstant;
