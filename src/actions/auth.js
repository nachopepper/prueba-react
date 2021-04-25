import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const login = () => {
    return {
        type: types.login,
        payload: {
            conectado: true
        }
    }
}
