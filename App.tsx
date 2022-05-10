import { useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CalcStore } from "./src/context/CalcContext";

import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

import MainNavigation from "./src/navigations/MainNavigation";
import Container from "./src/Container";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setLoaded(true);
    }
  }, [fontsLoaded]);

  if (loaded) {
    return (
      <NavigationContainer>
        <StatusBar style="light" />
        <CalcStore>
          <Container>
            <MainNavigation />
          </Container>
        </CalcStore>
      </NavigationContainer>
    );
  } else {
    return <View></View>;
  }
}
