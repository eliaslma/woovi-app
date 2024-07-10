import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Loader } from './src/components/Loader';
import { PaymentRoutes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito'

export default function App() {

    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold,
        Nunito_800ExtraBold
    });

    if (!fontsLoaded) {
        return (
            <Loader color="green" />
        )
    }

    return (
        <NavigationContainer>
            <StatusBar style='light' />
            <PaymentRoutes/>
        </NavigationContainer>
    );
}