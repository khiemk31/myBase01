import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {forwardRef} from 'react';
import BottomTab from './BottomTab';
import {
  navigate,
  navigateReplace,
  navigationRef,
  screenOptions,
} from './NavigationUtils';

import {PageName} from './PageName';
import {useAppTheme} from '../Hooks';
import Login from '../screen/PreAuth/LoginScreen/Login';
import {Colors} from '../Theme';
import HomeScreen from '../screen/Auth/HomeScreen/HomeScreen';
const Stack = createNativeStackNavigator();
const Application = () => {
  const {NavigationTheme} = useAppTheme();
  return (
    <NavigationContainer
      theme={NavigationTheme}
      ref={(ref: any) => {
        navigationRef.current = ref;
        // if (userStore.isLogged && userStore.passcodeEnabled) {
        navigate(PageName.HomeTab, {
          callback: () => navigateReplace(PageName.HomeTab),
        });
        // }
      }}>
      <Stack.Navigator
        initialRouteName={PageName.PreAuthStack}
        screenOptions={screenOptions}>
        {/* Màn splash  */}
        {/* <Stack.Screen
          name={PageName.OnboardingScreen}
          component={OnboardingScreen}
        /> */}
        {/* Phần login , resign */}
        <Stack.Screen name={PageName.PreAuthStack} component={PreAuthStack} />
        {/* Cấu hình loading cho codepush nếu dùng */}
        {/* <Stack.Screen
          name={PageName.InAppUpdateScreen}
          component={InAppUpdateScreen}
        /> */}
        {/* Nội dung chính của app */}
        <Stack.Screen name={PageName.AuthStack} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Application;

const PreAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={PageName.LoginScreen} component={Login} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={PageName.HomeTab} component={BottomTab} />
      {/* <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
          gestureDirection: 'vertical',
        }}
        name={PageName.StoryScreen}
        component={StoryScreen}
      /> */}
    </Stack.Navigator>
  );
};
export const EditProfileNavigator = forwardRef(({}, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        screenOptions={{
          ...screenOptions,
          contentStyle: {
            backgroundColor: Colors.transparent,
          },
        }}>
        <Stack.Screen name={PageName.HomeScreen} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
