import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PixQuoteType } from "../../components/PaymentOptions";

export type propsNavigatorStack = {
    PaymentMethodScreen: any;
    DetailMethodScreen: PixQuoteType;
    PayScreen: any;
    PaymentConfirmedScreen: any;
}

export type propsNavigationStack = NativeStackNavigationProp<propsNavigatorStack>