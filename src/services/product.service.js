import axios from 'axios';
import createApiClient from './api.service';

class ProductService{
    constructor(baseUrl = "/api/product"){
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data ,{
            headers: {
                'Content-Type': 'multipart/form-data' // Đảm bảo Content-Type là multipart/form-data
            }
        })).data;
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
        return (await this.api.put(`/${id}`, data,{
            headers: {
                'Content-Type': 'multipart/form-data' // Đảm bảo Content-Type là multipart/form-data
            }
        })).data;
    }   
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}
export default new ProductService()