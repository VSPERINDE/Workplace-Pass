import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/infrastructure/database/firebase";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
      </StoreProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
