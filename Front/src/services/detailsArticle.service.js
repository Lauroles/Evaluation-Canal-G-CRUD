import axios from 'axios';
import { Api } from '../constantes/api';

export class ConcertService {
    static async getArticle(id) {
        return await axios.get(Api.Url + '/article/' + id);
    }

    static async articlePut(id, data) {
        let url = Api.Url + '/article/' + id;

        return await axios.put(url, data, {
            headers: {
                'Accept': 'application/json',
            },
        });
    }
}