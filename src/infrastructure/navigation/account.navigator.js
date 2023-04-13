import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { CoworkingFormScreen } from "../../features/account/screens/coworking-form.screen";

const Stack = createStackNavigator();
const createScreenOptions = () => {
  return { headerShown: false };
};

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="CoworkingForm" component={CoworkingFormScreen} />
  </Stack.Navigator>
);
