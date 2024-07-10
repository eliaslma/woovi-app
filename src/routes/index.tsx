import React from 'react';

import { propsNavigatorStack } from './Models';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { PaymentMethodScreen } from '../screens/PaymentMethodScreen';
import { DetailMethodScreen } from '../screens/DetailMethodScreen';
import { PayScreen } from '../screens/PayScreen';


export function PaymentRoutes(){

    const Stack = createNativeStackNavigator<propsNavigatorStack>()
    
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen}/>
            <Stack.Screen name="DetailMethodScreen" component={DetailMethodScreen}/>
            <Stack.Screen name="PayScreen" component={PayScreen}/>
        </Stack.Navigator>
    );
}