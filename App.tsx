import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {FadeIn} from 'react-native-reanimated';
import {PortalProvider} from '@gorhom/portal';
import {enableFreeze} from 'react-native-screens';
import {Application} from './src/Navigators';
import HomeScreen from './src/screen/Auth/HomeScreen/HomeScreen';
import {Layout} from './src/Theme';

enableFreeze(true);
const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <SafeAreaProvider>
        <PortalProvider>
          {isReady ? (
            <Animated.View style={Layout.fill} entering={FadeIn}>
              <Application />
            </Animated.View>
          ) : (
            //SplashScreen
            <HomeScreen />
          )}

          {/* <LanguageSheet /> */}
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
