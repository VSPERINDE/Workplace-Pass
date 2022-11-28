import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { WorkplaceScreen } from "./src/features/workplace/screens/workplace.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { WorkplaceContextProvider } from "./src/services/workplaces/workplaces.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const Tab = createBottomTabNavigator();

const tabIcon = {
  Workplaces: "md-home",
  Map: "md-map",
  Settings: "md-settings",
  Saved: "md-bookmark",
};

const MapScreen = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const SavedScreen = () => (
  <SafeArea>
    <Text>Saved</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = tabIcon[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

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
      <ThemeProvider theme={theme}>
        <WorkplaceContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "#FDAF01",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Workplaces" component={WorkplaceScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Saved" component={SavedScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </WorkplaceContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
