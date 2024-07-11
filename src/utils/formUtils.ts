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