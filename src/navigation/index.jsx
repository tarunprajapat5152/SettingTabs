import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Setting from '../screens/Setting';
import NotificationsSetting from '../screens/NotificationSetting';
import CustomerComplaint from '../screens/CustomerComplaint';
import ContactSupport from '../screens/ContactSupport';
import FAQ from '../screens/FAQ';
import SubmitARequest from '../screens/SubmitARequest';
import Payout from '../screens/Payout';
import Invoice from '../screens/Invoice';
import Taxe from '../screens/Taxe';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name='NotificationSetting' component={NotificationsSetting} />
        <Stack.Screen name="CustomerComplaint" component={CustomerComplaint} />
        <Stack.Screen name="ContactSupport" component={ContactSupport} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="SubmitARequest" component={SubmitARequest} />
        <Stack.Screen name='Payout' component={Payout} />
        <Stack.Screen name='Invoice' component={Invoice} />
        <Stack.Screen name='Taxe' component={Taxe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
