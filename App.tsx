import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Loader } from './src/components/Loader';

import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold
} from '@expo-google-fonts/nunito'

export default function App() {

    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold
    });

    if (!fontsLoaded) {
        return (
            <Loader color="green" />
        )
    }

    return (
        <>
            <StatusBar style='light' />
        </>
    );
}