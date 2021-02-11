import axios from 'axios';
import { Api } from '../constantes/api';

export class LoginService {
    static async getlogin(data) {
        return await axios.post( Api.Url + '/user/connection', data, {headers: {
            'Accept':'application/json'
            }
        });
    }
}
