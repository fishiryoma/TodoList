import axios from 'axios';

const baseUrl = 'https://todo-list.alphacamp.io/api';

const axiosInstance = axios.create({ baseURL: baseUrl });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  },
);

export const getTodos = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/todos`);
    console.log('gettodo', res.data);
    return res.data.data;
  } catch (error) {
    console.log(`GET Todos failed:  ${error}`);
  }
};
export const createTodos = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axiosInstance.post(`${baseUrl}/todos`, { title, isDone });
    console.log('creattodo', res.data);
    return res.data;
  } catch (error) {
    console.log(`Create Todos failed:  ${error}`);
  }
};
export const patchTodos = async (payload) => {
  const { title, isDone, id } = payload;
  try {
    const res = await axiosInstance.patch(`${baseUrl}/todos/${id}`, {
      title,
      isDone,
    });
    console.log('patchtodo', res.data);

    return res.data;
  } catch (error) {
    console.log(`Patch Todos failed:  ${error}`);
  }
};
export const deleteTodos = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/todos/${id}`);
    // console.log('deletetodo', res.data);
    return res.data;
  } catch (error) {
    console.log(`Delete Todos failed:  ${error}`);
  }
};
