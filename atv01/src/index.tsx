import React from "react";
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from "@expo-google-fonts/roboto-slab";
import { AppLoading } from "expo";

import Main from "./pages/Main";

function App() {
  let [fontsLoaded, error] = useFonts({
    RobotoSlab_Regular: RobotoSlab_400Regular,
    RobotoSlab_Medium: RobotoSlab_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Main />
    </>
  );
}

export default registerRootComponent(App);
