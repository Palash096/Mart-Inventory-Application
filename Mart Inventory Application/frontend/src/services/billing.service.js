import httpClient from '../http-common';

const getAll = () => {
  return httpClient.get('/billing/');
};

const create = (data) => {
  return httpClient.post('/billing/', data);
};

const get = (id) => {
  return httpClient.get(`/billing/${id}`);
};

const update = (data) => {
  return httpClient.put('/billing/', data);
};

const remove = (id) => {
  return httpClient.delete(`/billing/${id}`);
};
export default { getAll, create, get, update, remove };
