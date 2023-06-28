/**
 *
 * Asynchronously loads the component for Svg
 *
 */
import { lazyLoad } from '@/utils/loadable';

export const IconSuccess = lazyLoad(() => import('./IconSuccess'));
export const IconMap = lazyLoad(() => import('./IconMap'));
export const IconMarker = lazyLoad(() => import('./IconMarker'));
export const IconAccount = lazyLoad(() => import('./IconAccount'));
export const IconSearch = lazyLoad(() => import('./IconSearch'));
export const IconFood = lazyLoad(() => import('./IconFood'));
export const IconBuilding = lazyLoad(() => import('./IconBuilding'));
export const IconHeart = lazyLoad(() => import('./IconHeart'));
export const IconChat = lazyLoad(() => import('./IconChat'));
export const IconChangePassword = lazyLoad(
  () => import('./IconChangePassword'),
);
export const IconFavorDestination = lazyLoad(
  () => import('./IconFavorDestination'),
);
export const IconMySchedules = lazyLoad(() => import('./IconMySchedules'));
export const IconListBooking = lazyLoad(() => import('./IconListBooking'));
export const IconLogout = lazyLoad(() => import('./IconLogout'));
export const IconTag = lazyLoad(() => import('./IconTag'));
export const IconShare = lazyLoad(() => import('./IconShare'));
export const IconBookmark = lazyLoad(() => import('./IconBookmark'));
