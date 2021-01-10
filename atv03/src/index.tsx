import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';

import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />

      <Main />
    </>
  );
};

export default registerRootComponent(App);
