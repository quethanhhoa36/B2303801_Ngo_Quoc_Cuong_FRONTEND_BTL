import axios from 'axios';
import createApiClient from './api.service';

class UserService{
    constructor(baseUrl = "/api/user"){
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async login(data){
        return (await this.api.post("/login",data));
    }
    async getAll()
    {
        return (await this.api.get("/")).data;
    }
    
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async getByPage(page){
        return (await this.api.get('/by/pages',{
            params:{
                page,
            }
        })).data
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }   
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}
export default new UserService()

