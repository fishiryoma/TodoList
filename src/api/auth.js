import axios from 'axios';

const baseUrl = 'https://todo-list.alphacamp.io/api/auth/';

export const login = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${baseUrl}login`, {
      username,
      password,
    });

    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (err) {
    console.log(`Login failed ${err}`);
  }
};

export const register = async ({ username, password, email }) => {
  try {
    const { data } = await axios.post(`${baseUrl}register`, {
      username,
      password,
      email,
    });
    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (err) {
    console.log(`Register failed ${err}`);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const res = await axios.get(`${baseUrl}test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });

    return res.data.success;
  } catch (err) {
    console.log(`Check Permission failed ${err}`);
  }
};
