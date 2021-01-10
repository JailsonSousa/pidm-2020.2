import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { Text, SafeAreaView } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Text>Atv03</Text>
      </SafeAreaView>
    </>
  );
};

export default registerRootComponent(App);
