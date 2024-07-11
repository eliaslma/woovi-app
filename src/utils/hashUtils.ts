import CryptoJS from "crypto-js";

export const generateHash = () => {
    const timestamp = Date.now().toString();
    return CryptoJS.MD5(timestamp).toString();
};