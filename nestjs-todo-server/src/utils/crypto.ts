import { AES, enc } from 'crypto-js';
import { secretContents } from '@auth/contents';

export const encryptValue = (value: string) => {
  return AES.encrypt(value, secretContents.signin).toString();
};

export const decryptValue = (value: string) => {
  return AES.decrypt(value, secretContents.signin).toString(enc.Utf8);
};
