export const formatCPF = (value: string) => {
    const cleanedValue = value.replace(/\D/g, '');
    let formattedValue = '';
    for (let i = 0; i < cleanedValue.length; i++) {
        if (i === 3 || i === 6) {
            formattedValue += '.';
        } else if (i === 9) {
            formattedValue += '-';
        }
        formattedValue += cleanedValue[i];
    }
    return formattedValue;
};

export const formatExpiration = (value: string) => {
    const cleanedValue = value.replace(/\D/g, '');
    let formattedValue = '';
    for (let i = 0; i < cleanedValue.length; i++) {
        if (i === 2) {
            formattedValue += '/';
        }
        formattedValue += cleanedValue[i];
    }
    return formattedValue.slice(0, 5); // Limita a 5 caracteres (MM/AA)
};

export const formatCreditCardNumber = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove todos os caracteres não numéricos
      .slice(0, 16) // Limita a 16 dígitos
      .replace(/(\d{4})(?=\d)/g, '$1 ') // Adiciona espaço a cada 4 dígitos
      .trim();
  };