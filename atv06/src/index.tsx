/* eslint-disable react/style-prop-object */
import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import CustomStatusBar from './components/CustomStatusBar';
import { navigationRef } from './services/RootNavigation';

import DefaultRoutes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <CustomStatusBar />
      <AppProvider>
        <DefaultRoutes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
