import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../../src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { WorkplaceScreen } from "../../../src/features/workplace/screens/workplace.screens";
import { Text } from "react-native";
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
    tabBarActiveTintColor: "#FDAF01",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Workplaces" component={WorkplaceScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
