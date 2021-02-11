import axios from 'axios';
import { Api } from '../constantes/api';

export class RegisterService {
    static async postRegister(data) {
        const url = Api.Url + '/user/registration';

        return await axios.post( url, data, {headers: {
            'Accept':'application/json'
            }
        })
    }
}