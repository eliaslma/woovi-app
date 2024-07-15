export interface PixPaymentOption {
    id: number;
    quote: number;
    quote_value: string;
    total: string;
    cashback?: number;
    cashbackValue?: string;
    bestOption?: boolean;
}
