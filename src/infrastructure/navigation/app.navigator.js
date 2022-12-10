import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../../src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { WorkplacesNavigator } from "./workplaces.navigator";
import { MapScreen } from "../../features/map/screens/new-map.screen";
import { FavouriteScreen } from "../../components/favourites/favourite.screens";
import { WorkplaceContextProvider } from "../../services/workplaces/workplaces.context";
import { LocationContextProvider } from "../../services/locations/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();

const tabIcon = {
  Workplaces: "md-home",
  Map: "md-map",
  Settings: "md-settings",
  Favourites: "md-heart",
};

const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
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

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <WorkplaceContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Workplaces" component={WorkplacesNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Favourites" component={FavouriteScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </WorkplaceContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
