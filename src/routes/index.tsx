import React from 'react';

import { propsNavigatorStack } from './Models';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import PaymentMethod from '../pages/PaymentMethod';
import PaymentMethodDetails from '../pages/PaymentMethodDetails';
import { PayScreen } from '../screens/PayScreen';
import { PaymentConfirmedScreen } from '../screens/PaymentConfirmedScreen';


export function PaymentRoutes(){

    const Stack = createNativeStackNavigator<propsNavigatorStack>()
    
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PaymentMethodScreen" component={PaymentMethod}/>
            <Stack.Screen name="DetailMethodScreen" component={PaymentMethodDetails}/>
            <Stack.Screen name="PayScreen" component={PayScreen}/>
            <Stack.Screen name="PaymentConfirmedScreen" component={PaymentConfirmedScreen}/>
        </Stack.Navigator>
    );
}