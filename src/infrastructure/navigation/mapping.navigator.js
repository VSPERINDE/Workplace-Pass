import React, { useContext } from "react";

import { AppUserNavigator } from "./user.navigator";
import { AppCoworkingNavigator } from "./coworking.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const MappingNavigation = () => {
  const { isCoworking } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isCoworking ? <AppCoworkingNavigator /> : <AppUserNavigator />}
    </NavigationContainer>
  );
};
