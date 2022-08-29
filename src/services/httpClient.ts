import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;

    if (response) {
      if (response.status === 401) {
        // Executar código de deslogar da aplicação
      }

      if (response.status === 403) {
        // Executar código de permissionamento
      }

      return response.data;
    }

    return error;
  }
);

export default httpClient;
