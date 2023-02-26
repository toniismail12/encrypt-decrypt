import CryptoJS from 'crypto-js';

export default function Decrypt(value, key) {
    
    const decryptedData = CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
    // console.log('Decrypted data:', decryptedData);

    return decryptedData;
}
