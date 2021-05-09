import { put, takeLatest } from 'redux-saga/effects';
import { jest } from '@jest/globals'
import {
  fetchProducts as fetchProductsAction,
  fetchProductsSuccess,
  fetchProductsFail,
  fetchProduct as fetchProductAction,
  fetchProductSuccess,
  fetchProductFail,
  deleteProduct as deleteProductAction,
  deleteProductSuccess,
  deleteProductFail,
  updateProduct as updateProductAction,
  updateProductSuccess,
  updateProductFail
} from 'redux/actions/product';
import {
   PRODUCTS_FETCH_INITIATED,
   PRODUCT_DELETE_INITIATED,
   PRODUCT_FETCH_INITIATED,
   PRODUCT_UPDATE_INITIATED
} from 'redux/constants/products';
import productSaga, {
  fetchProducts,
  fetchProduct,
  deleteProduct,
  updateProduct
} from 'redux/sagas/product';


describe('Fetch Products saga', () => {
  let fetchproductsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    fetchproductsGenerator = fetchProducts(fetchProductsAction());

    const callDescriptor = fetchproductsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchProductsSuccess action if it requests the data successfully', () => {
   const response = {
     data: [
       {
         name: 'First product',
       },
       {
         name: 'Second product',
       },
     ]
   };
   const putDescriptor = fetchproductsGenerator.next(response).value;
   expect(putDescriptor).toEqual(put(fetchProductsSuccess(response.data)));
 });

 it('should call the fetchProductsFail action if the response errors', () => {
   const response = new Error('Some error');
   const putDescriptor = fetchproductsGenerator.throw(response).value;
   expect(putDescriptor).toEqual(put(fetchProductsFail(response)));
 });
});

describe('Fetch Product saga', () => {
  let fetchProductGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    fetchProductGenerator = fetchProduct(fetchProductAction(123));

    const callDescriptor = fetchProductGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchProductSuccess action if it requests the data successfully', () => {
   const response = {
     data: {
       name: 'Product name'
     }
   };
   const putDescriptor = fetchProductGenerator.next(response).value;
   expect(putDescriptor).toEqual(put(fetchProductSuccess(response.data)));
 });

 it('should call the fetchProductFail action if the response errors', () => {
   const response = new Error('Some error');
   const putDescriptor = fetchProductGenerator.throw(response).value;
   expect(putDescriptor).toEqual(put(fetchProductFail(response)));
 });
});

describe('Delete Product saga', () => {
  let deleteProductGenerator;
  const id = 123;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    deleteProductGenerator = deleteProduct(deleteProductAction(id));

    const callDescriptor = deleteProductGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the deleteProductSuccess action if it requests the data successfully', () => {
   const putDescriptor = deleteProductGenerator.next().value;
   expect(putDescriptor).toEqual(put(deleteProductSuccess(id)));
 });

 it('should call the deleteProductFail action if the response errors', () => {
   const response = new Error('Some error');
   const putDescriptor = deleteProductGenerator.throw(response).value;
   expect(putDescriptor).toEqual(put(deleteProductFail()));
 });
});

describe('Update Product saga', () => {
  let updateProductGenerator;
  const id = 123;
  const data = { name: 'Product' }

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    updateProductGenerator = updateProduct(updateProductAction(id, data));

    const callDescriptor = updateProductGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the updateProductSuccess action if it requests the data successfully', () => {
   const putDescriptor = updateProductGenerator.next().value;
   expect(putDescriptor).toEqual(put(updateProductSuccess()));
 });

 it('should call the updateProductFail action if the response errors', () => {
   const response = new Error('Some error');
   const putDescriptor = updateProductGenerator.throw(response).value;
   expect(putDescriptor).toEqual(put(updateProductFail()));
 });
});

describe('Create Product saga', () => {
  let createProductGenerator;
  const id = null;
  const data = { name: 'Product' };

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    createProductGenerator = updateProduct(updateProductAction(id, data));

    const callDescriptor = createProductGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the updateProductSuccess action if it requests the data successfully', () => {
   const putDescriptor = createProductGenerator.next().value;
   expect(putDescriptor).toEqual(put(updateProductSuccess()));
 });

 it('should call the updateProductFail action if the response errors', () => {
   const response = new Error('Some error');
   const putDescriptor = createProductGenerator.throw(response).value;
   expect(putDescriptor).toEqual(put(updateProductFail()));
 });
});

describe('product Saga', () => {
  const iterator = productSaga();

  it('should start task to watch for fetchProducts action', () => {
    const takeLatestDescriptor = iterator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(PRODUCTS_FETCH_INITIATED, fetchProducts));
  });

  it('should start task to watch for deleteProduct action', () => {
    const takeLatestDescriptor = iterator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(PRODUCT_DELETE_INITIATED, deleteProduct));
  });

  it('should start task to watch for fetchProduct action', () => {
    const takeLatestDescriptor = iterator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(PRODUCT_FETCH_INITIATED, fetchProduct));
  });

  it('should start task to watch for updateProduct action', () => {
    const takeLatestDescriptor = iterator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(PRODUCT_UPDATE_INITIATED, updateProduct));
  });
});
