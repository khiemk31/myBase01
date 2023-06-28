import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {screenOptions} from './NavigationUtils';
import {screenHeight} from '../Theme';
import {PageName} from './PageName';
import HomeScreen from '../screen/Auth/HomeScreen/HomeScreen';
import BottomTabBar from '../Components/BottomTabBar';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const BottomTab = () => {
  return (
    <View style={{height: screenHeight}}>
      <Tab.Navigator
        tabBar={(props: any) => <BottomTabBar {...props} />}
        screenOptions={screenOptions}>
        <Tab.Screen name={PageName.HomeStack} component={HomeStack} />
        <Tab.Screen name={PageName.HomeScreen} component={HomeScreen} />
        <Tab.Screen name={PageName.HomeScreen} component={HomeScreen} />
      </Tab.Navigator>
    </View>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={PageName.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default BottomTab;
