/* eslint-disable react/style-prop-object */
/* eslint-disable camelcase */
import React from 'react';
import { registerRootComponent } from 'expo';
import { AppearanceProvider } from 'react-native-appearance';

import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';

import AppNavigator from './routes';
import AppProvider from './hooks';

const App: React.FC = () => {
  const [fontsLoaded, error] = useFonts({
    RobotoSlab_Regular: RobotoSlab_400Regular,
    RobotoSlab_Medium: RobotoSlab_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppearanceProvider>
        <StatusBar style="auto" />
        <AppProvider>
          <AppNavigator />
        </AppProvider>
      </AppearanceProvider>
    </>
  );
};

export default registerRootComponent(App);
