import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PixPaymentOption } from "../../types/PixPaymentOption";

export type propsNavigatorStack = {
    PaymentMethodScreen: any;
    DetailMethodScreen: PixPaymentOption;
    PayScreen: any;
    PaymentConfirmedScreen: any;
}

export type propsNavigationStack = NativeStackNavigationProp<propsNavigatorStack>