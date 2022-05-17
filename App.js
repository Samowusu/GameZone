import "react-native-gesture-handler";

import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import DrawerNavigation from "./routes/drawer";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <DrawerNavigation />;
  }
}
