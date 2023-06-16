import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { WorkplacesNavigator } from "./workplaces.navigator";
import { FavouriteScreen } from "../../components/favourites/favourite.screens";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsNavigator } from "./settings.navigator";
import { updateAgendamento } from "../../store/modules/workplace/actions";
import { useDispatch } from "react-redux";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { ScheduleScreen } from "../../features/schedule/screens/schedule.screen";

const Tab = createBottomTabNavigator();

const tabIcon = {
  Home: "md-home",
  Agenda: "md-book",
  Conta: "md-settings",
  Favoritos: "md-heart",
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

export const AppNavigator = () => {
  const { user } = useContext(AuthenticationContext);

  const dispatch = useDispatch();
  const userId = user._id;

  dispatch(updateAgendamento("clienteId", userId));

  useEffect(() => {}, []);

  return (
    <FavouritesContextProvider>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Home" component={WorkplacesNavigator} />
        <Tab.Screen name="Agenda" component={ScheduleScreen} />
        <Tab.Screen name="Favoritos" component={FavouriteScreen} />
        <Tab.Screen name="Conta" component={SettingsNavigator} />
      </Tab.Navigator>
    </FavouritesContextProvider>
  );
};
