import { callApi } from './helper';

const Api = {
  fetchProducts: () => callApi('/products.json?brand=nyx', 'GET'),
  fetchProduct: id => callApi(`/products/${id}.json`, 'GET'),
  deleteProduct: id => callApi(`/products/${id}.json`, 'DELETE'),
  createProduct: data => callApi(`/products/`, 'POST', data),
  updateProduct: (id, data) => callApi(`/products/${id}.json`, 'PATCH', data),
}

export default Api;
