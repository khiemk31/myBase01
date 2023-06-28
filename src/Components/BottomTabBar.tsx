/* eslint-disable @typescript-eslint/no-unused-vars */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useCallback, useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeSvg from '../assets/svg/HomeSvg';
import {PageName} from '../Navigators/PageName';
import SearchSvg from '../assets/svg/SearchSvg';
import PlusCircleSvg from '../assets/svg/PlusCircleSvg';
import {Colors, Layout, XStyleSheet} from '../Theme';
import {navigate} from '../Navigators';

const BottomTabBar = ({state}: BottomTabBarProps) => {
  const tabBars = useMemo(
    () => [
      {
        name: 'Home',
        icon: HomeSvg,
        routeName: PageName.HomeScreen,
        index: 0,
      },
      {
        name: 'Search',
        icon: SearchSvg,
        routeName: PageName.HomeScreen,
        index: 1,
      },
      {
        name: 'Create',
        icon: PlusCircleSvg,
      },
      {
        name: 'Profile',
        icon: PlusCircleSvg,
        // ({color, ...restProps}) => null,
        // <AppImage
        //   {...restProps}
        //   containerStyle={[styles.avatar, {borderColor: color}]}
        //   source={{
        //     uri:
        //       userStore?.userInfo?.avatar_url ||
        //       'https://picsum.photos/200/300',
        //   }}
        // />
        routeName: PageName.HomeScreen,
        index: 2,
      },
    ],
    [],
  );
  const renderTabItem = useCallback(
    (tab: any) => {
      return (
        <React.Fragment key={tab.name}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[Layout.fill, Layout.center]}
            onPress={() => navigate(tab.routeName)}>
            <tab.icon
              onPress={() => navigate(tab.routeName)}
              size={24}
              color={tab.index === state.index ? Colors.primary : Colors.white}
            />
          </TouchableOpacity>
        </React.Fragment>
      );
    },
    [state.index],
  );
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={styles.rootView}>
      <View
        style={[
          styles.tabBarView,
          {
            height: 80 + (bottom > 0 ? 10 : 0),
          },
        ]}>
        {tabBars.map(renderTabItem)}
      </View>
    </View>
  );
};

export default BottomTabBar;

const styles = XStyleSheet.create({
  rootView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.kFF7A51,
    zIndex: 99,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabBarView: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  createBtn: {
    marginBottom: 50,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 99,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
});
