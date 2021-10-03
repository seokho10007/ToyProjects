import crypto from 'crypto-js';

import { secretContents } from 'src/auth/contents';

export const encryptValue = (value: string) => {
  return crypto.AES.encrypt(value, 'asd').toString();
};

// export const decryptValue = (value: string) =>
//   crypto.AES.decrypt(value, secretContents.signin).toString(crypto.enc.Utf8);
