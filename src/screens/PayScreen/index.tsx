import React, { useState } from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { ScreensTitle } from '../../components/ScreensTitle';
import { Picker } from '@react-native-picker/picker';
import { DefaultButton } from '../../components/DefaultButton';
import { Overlay } from 'react-native-elements';
import { QuotesList } from '../../components/QuotesList';
import { ScrollView } from 'react-native';
import { PaymentTerm } from '../../components/PaymentTerm';
import { SecurityFooter } from '../../components/SecurityFooter';
import { formatCPF, formatExpiration } from '../../utils/formUtils';
import { propsNavigationStack } from '../../routes/Models';
import { showMessage } from 'react-native-flash-message';

import {
    Container,
    FormWrapper,
    Logo,
    LogoWrapper,
    CardSecurityWrapper,
    SelectQuote
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';
import { PixQuoteType } from '../../components/PaymentOptions';
import { TotalQuotes } from '../../components/TotalQuotes';
import { LineDivider } from '../../components/LineDivider';
import { Identifier } from '../../components/Identifier';
import { generateHash } from '../../utils/hashUtils';

interface FormData extends FieldValues {
    nomeCompleto: string;
    cpf: string;
    numeroCartao: string;
    vencimento: string;
    cvv: string;
}

const textInputStyles = {
    fontSize: 18,
    selectionColor: '#03D69D',
    activeOutlineColor: '#03D69D',
    outlineColor: '#E5E5E5',
    underlineColor: '#03D69D'
};

export function PayScreen() {

    const route = useRoute();
    const params = route.params as PixQuoteType;
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [quoteSelected, setQuoteSelected] = useState(`${params.quote - 1}x de ${params.quote_value}`);
    const [loading, setLoading] = useState<boolean>()
    const navigation = useNavigation<propsNavigationStack>();

    const hash = generateHash();

    const onSubmit = (data: FormData) => {

        setLoading(true);

        setTimeout(() => {
            showMessage({
                backgroundColor: '#03D69D',
                message: "Já identificamos seu pagamento.",
                description: "Pagamento via PIX realizado com sucesso!",
                type: "success",
                duration: 1500
            });

            navigation.navigate('PaymentConfirmedScreen', { total: params.total, hash, cashback: params.cashbackValue, name: data.name })
            setLoading(false);
        }, 1500);

    };

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <Container>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <LogoWrapper>
                        <Logo source={require('./../../../assets/woovi-logo.png')} />
                    </LogoWrapper>
                    <ScreensTitle title={`Elias, pague o restante em ${params.quote - 1}x no ${'\n'} cartão`} />
                    <FormWrapper>
                        <Controller
                            control={control}
                            name="name"
                            rules={{ required: 'Nome completo é obrigatório' }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={textInputStyles}
                                    mode='outlined'
                                    label='Nome completo'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    selectionColor={textInputStyles.selectionColor}
                                    activeOutlineColor={textInputStyles.activeOutlineColor}
                                    outlineColor={textInputStyles.outlineColor}
                                    underlineColor={textInputStyles.underlineColor}
                                    error={!!errors.name}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="cpf"
                            rules={{ required: 'CPF é obrigatório' }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    mode='outlined'
                                    label='CPF'
                                    onBlur={onBlur}
                                    onChangeText={(text) => onChange(formatCPF(text))}
                                    value={value}
                                    selectionColor={textInputStyles.selectionColor}
                                    activeOutlineColor={textInputStyles.activeOutlineColor}
                                    outlineColor={textInputStyles.outlineColor}
                                    underlineColor={textInputStyles.underlineColor}
                                    error={!!errors.cpf}
                                    keyboardType="numeric"
                                    maxLength={14} // CPF formatado tem 14 caracteres
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="cardNumber"
                            rules={{ required: 'Número do cartão é obrigatório' }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    mode='outlined'
                                    label='Número do cartão'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    selectionColor={textInputStyles.selectionColor}
                                    activeOutlineColor={textInputStyles.activeOutlineColor}
                                    outlineColor={textInputStyles.outlineColor}
                                    underlineColor={textInputStyles.underlineColor}
                                    error={!!errors.cardNumber}
                                />
                            )}
                        />
                        <CardSecurityWrapper>
                            <Controller
                                control={control}
                                name="deadline"
                                rules={{ required: 'Vencimento é obrigatório' }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        mode='outlined'
                                        style={{ flex: 1 }}
                                        label='Vencimento'
                                        onBlur={onBlur}
                                        onChangeText={(text) => onChange(formatExpiration(text))}
                                        value={value}
                                        selectionColor={textInputStyles.selectionColor}
                                        activeOutlineColor={textInputStyles.activeOutlineColor}
                                        outlineColor={textInputStyles.outlineColor}
                                        underlineColor={textInputStyles.underlineColor}
                                        error={!!errors.deadline}
                                        keyboardType="numeric"
                                        maxLength={5} // MM/AA formatado tem 5 caracteres
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="cvv"
                                rules={{ required: 'CVV é obrigatório' }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        mode='outlined'
                                        style={{ flex: 1 }}
                                        label='CVV'
                                        maxLength={4}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        selectionColor={textInputStyles.selectionColor}
                                        activeOutlineColor={textInputStyles.activeOutlineColor}
                                        outlineColor={textInputStyles.outlineColor}
                                        underlineColor={textInputStyles.underlineColor}
                                        error={!!errors.cvv}
                                        keyboardType='numeric'
                                    />
                                )}
                            />
                        </CardSecurityWrapper>

                        <TextInput
                            mode='outlined'
                            label='Parcelas'
                            value={quoteSelected}
                            editable={false}
                            onPress={() => toggleOverlay()}
                            selectionColor={textInputStyles.selectionColor}
                            activeOutlineColor={textInputStyles.activeOutlineColor}
                            outlineColor={textInputStyles.outlineColor}
                            underlineColor={textInputStyles.underlineColor}
                        />
                        <DefaultButton title="Pagar" onPress={handleSubmit(onSubmit)} isLoading={loading} disabled={loading} />
                        <PaymentTerm />
                    </FormWrapper>
                    {/* <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ borderRadius: 16 }}>
                        <SelectQuote>Selecione uma parcela</SelectQuote>
                        <Picker
                            style={{ height: 200, width: 300 }}
                            selectedValue={quoteSelected}
                            onValueChange={(itemValue, itemIndex) =>
                                setQuoteSelected(itemValue)
                            }>
                            {Array.from({ length: params.quote - 1 }).map((_, index) => (
                                <Picker.Item key={index} label={`${index + 1}x de ${params.quote_value}`} value={`${index + 1}x de ${params.quote_value}`} />
                            ))}
                        </Picker>
                    </Overlay> */}
                    <QuotesList params={params} firstQuotePay={true} />
                    <LineDivider />
                    <TotalQuotes total={params.total} />
                    <LineDivider />
                    <Identifier hash={hash} />
                    <SecurityFooter />
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
}
