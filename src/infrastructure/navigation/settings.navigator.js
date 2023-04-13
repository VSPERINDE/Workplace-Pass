import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screens";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { ContactsScreen } from "../../features/settings/screens/contacts.screens";

const SettingsStack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
};

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={createScreenOptions}>
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Contacts"
        component={ContactsScreen}
      />
    </SettingsStack.Navigator>
  );
};
