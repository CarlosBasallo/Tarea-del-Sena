import { apiClient } from '../apiClient.js';
import { User } from '../models/User.js';


export class UserService {
  static async create(payload) {
    const data = await apiClient.post('/users', payload);
    return new User(data);
  }
  static async list() {
    const data = await apiClient.get('/users');
    return data.map(d => new User(d));
  }
  static async update(id, payload) {
    const data = await apiClient.put(`/users/${id}`, payload);
    return new User(data);
  }
  static async remove(id) {
    return apiClient.delete(`/users/${id}`);
  }
}
