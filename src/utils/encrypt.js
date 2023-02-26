import CryptoJS from 'crypto-js';

function Encrypt(value, key) {
    
    const encryptedData = CryptoJS.AES.encrypt(value, key).toString();
    // console.log('Encrypted data:', encryptedData);

    return encryptedData;

}

export default Encrypt;
