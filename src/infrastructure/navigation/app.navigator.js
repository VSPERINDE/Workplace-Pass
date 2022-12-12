import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { WorkplacesNavigator } from "./workplaces.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouriteScreen } from "../../components/favourites/favourite.screens";
import { WorkplaceContextProvider } from "../../services/workplaces/workplaces.context";
import { LocationContextProvider } from "../../services/locations/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsScreen } from "../../features/settings/screens/settings.screens";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

const tabIcon = {
  Workplaces: "md-home",
  Map: "md-map",
  Settings: "md-settings",
  Favourites: "md-heart",
};

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
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </WorkplaceContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
