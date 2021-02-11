import axios from 'axios';
import { Api } from '../constantes/api';

export class AllArticlesService {
   static async getAllArticles() {
       let url = Api.Url + '/article';
       return await axios.get(url);
   }
}