import { apiClient } from '../apiClient.js';
import { Product } from '../models/Product.js';


export class ProductService {
  static async create(payload) {
    const data = await apiClient.post('/products', payload);
    return new Product(data);
  }
  static async list() {
    const data = await apiClient.get('/products');
    return data.map(d => new Product(d));
  }
  static async update(id, payload) {
    const data = await apiClient.put(`/products/${id}`, payload);
    return new Product(data);
  }
  static async remove(id) {
    return apiClient.delete(`/products/${id}`);
  }
}
