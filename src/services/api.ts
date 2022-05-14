import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: ' https://books.ioasys.com.br/api/v1/',
});

api.interceptors.request.use(
  async (config: { headers: { Authorization: string } }) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);


export default api;
