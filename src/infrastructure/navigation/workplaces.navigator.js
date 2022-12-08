import React from "react";
import { WorkplaceDetailScreen } from "../../features/workplace/screens/workplace-detail.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { WorkplaceScreen } from "../../features/workplace/screens/workplace.screens";

const WorkplaceStack = createStackNavigator();

export const WorkplacesNavigator = () => {
  return (
    <WorkplaceStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
      headerMode="none"
    >
      <WorkplaceStack.Screen name="Workplace" component={WorkplaceScreen} />
      <WorkplaceStack.Screen
        name="WorkplaceDetail"
        component={WorkplaceDetailScreen}
      />
    </WorkplaceStack.Navigator>
  );
};