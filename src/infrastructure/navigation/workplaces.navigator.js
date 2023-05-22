import React from "react";
import { WorkplaceDetailScreen } from "../../features/workplace/screens/workplace-detail.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { WorkplaceScreen } from "../../features/workplace/screens/workplace.screens";
import { BookingScreen } from "../../features/booking/screens/booking.screens";
import CheckoutScreen from "../../features/booking/screens/checkout.screen";

const WorkplaceStack = createStackNavigator();
const createScreenOptions = () => {
  return { headerShown: false, ...TransitionPresets.ModalPresentationIOS };
};

export const WorkplacesNavigator = () => {
  return (
    <WorkplaceStack.Navigator screenOptions={createScreenOptions}>
      <WorkplaceStack.Screen name="Workplace" component={WorkplaceScreen} />
      <WorkplaceStack.Screen
        name="WorkplaceDetail"
        component={WorkplaceDetailScreen}
      />
      <WorkplaceStack.Screen name="BookingDetail" component={BookingScreen} />
      <WorkplaceStack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </WorkplaceStack.Navigator>
  );
};
