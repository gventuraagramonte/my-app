const { default: axios } = require("axios");

const apiUrl = "http://localhost:4000";

export const getItems = async () => {
  const response = await axios.get(`${apiUrl}/items`);
  return response.data;
};

export const getItemById = async (id) => {
  const response = await axios.get(`${apiUrl}/items/${id}`);
  return response.data;
};

export const createItem = async (data) => {
  const response = await axios.post(`${apiUrl}/items`, data);
  return response.data;
};

export const updateItem = async (id, data) => {
  const response = await axios.put(`${apiUrl}/items?itemID=${id}`, data);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await axios.delete(`${apiUrl}/items/${id}`);
  return response.data;
};
