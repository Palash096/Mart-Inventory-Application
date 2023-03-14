import httpClient from '../http-common';

const getAll = () => {
  return httpClient.get('/product/');
};

const create = (data) => {
  return httpClient.post('/product/', data);
};

const get = (id) => {
  return httpClient.get(`/product/${id}`);
};

const update = (data) => {
  return httpClient.put('/product/', data);
};

const remove = (id) => {
  return httpClient.delete(`/product/${id}`);
};
export default { getAll, create, get, update, remove };
