import axios from 'axios';
import CryptoJS from 'crypto-js';

export const encrypt = (text:string) => {
    const secretKey = 'HDNDT-JDHT8FNEK-JJHR';
    const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
    return encrypted;
}

export const callApi = async (values:object) => {
    try {
        const data = {...values, "token": import.meta.env.VITE_TOKEN}

        const jsonString = JSON.stringify(data);
        const encryptedData = encrypt(jsonString);

        const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}/api/register`, { data: encryptedData });

        return response;
    } catch (error) {
        throw error;
    }
};

export const saveSession = (key:string, value:object) => {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to sessionStorage', error);
    }
};

export const getSession = (key:string) => {
    try {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error reading from sessionStorage', error);
        return null;
    }
};

export const removeSession = (key:string) => {
    try {
        sessionStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing from sessionStorage', error);
    }
};