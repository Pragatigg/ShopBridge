import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFail,
  fetchProduct,
  fetchProductSuccess,
  fetchProductFail,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFail,
  updateProduct,
  updateProductSuccess,
  updateProductFailed,
  formUpdate,
  resetProduct
} from 'redux/actions/product';

import {
  PRODUCTS_FETCH_INITIATED,
  PRODUCTS_FETCH_SUCCEEDED,
  PRODUCTS_FETCH_FAILED,
  PRODUCT_FETCH_INITIATED,
  PRODUCT_FETCH_SUCCEEDED,
  PRODUCT_FETCH_FAILED,
  PRODUCT_DELETE_INITIATED,
  PRODUCT_DELETE_SUCCEEDED,
  PRODUCT_DELETE_FAILED,
  PRODUCT_UPDATE_INITIATED,
  PRODUCT_UPDATE_SUCCEEDED,
  PRODUCT_UPDATE_FAILED,
  PRODUCT_FORM_UPDATE,
  RESET_PRODUCT
} from "redux/constants/products";

describe('Product Actions', () => {
  test('fetch products action', () => {
    const fixture = {
      type: PRODUCTS_FETCH_INITIATED
    }
    expect(fetchProducts()).toEqual(fixture);
  });

  test('fetch products success action', () => {
    const data = {};
    const fixture = {
      type: PRODUCTS_FETCH_SUCCEEDED,
      payload: data
    }
    expect(fetchProductsSuccess(data)).toEqual(fixture);
  });

  test('fetch products fail action', () => {
    const fixture = {
      type: PRODUCTS_FETCH_FAILED
    }
    expect(fetchProductsFail()).toEqual(fixture);
  });

  test('fetch product action', () => {
    const fixture = {
      type: PRODUCT_FETCH_INITIATED
    }
    expect(fetchProduct()).toEqual(fixture);
  });

  test('fetch product success action', () => {
    const data = {};
    const fixture = {
      type: PRODUCT_FETCH_SUCCEEDED,
      payload: data
    }
    expect(fetchProductSuccess(data)).toEqual(fixture);
  });

  test('fetch product fail action', () => {
    const fixture = {
      type: PRODUCT_FETCH_FAILED
    }
    expect(fetchProductFail()).toEqual(fixture);
  });

  test('delete product action', () => {
    const id = 2342;
    const fixture = {
      type: PRODUCT_DELETE_INITIATED,
      payload: id
    }
    expect(deleteProduct(id)).toEqual(fixture);
  });

  test('delete product success action', () => {
    const id = 2342;
    const fixture = {
      type: PRODUCT_DELETE_SUCCEEDED,
      payload: id
    }
    expect(deleteProductSuccess(id)).toEqual(fixture);
  });

  test('delete product fail action', () => {
    const fixture = {
      type: PRODUCT_DELETE_FAILED
    }
    expect(deleteProductFail()).toEqual(fixture);
  });

  test('update product action', () => {
    const id = 2342;
    const data = {};
    const fixture = {
      type: PRODUCT_UPDATE_INITIATED,
      payload: { id, data }
    }
    expect(updateProduct(id, data)).toEqual(fixture);
  });

  test('update product success action', () => {
    const fixture = {
      type: PRODUCT_UPDATE_SUCCEEDED,
    }
    expect(updateProductSuccess()).toEqual(fixture);
  });

  test('update product fail action', () => {
    const fixture = {
      type: PRODUCT_UPDATE_FAILED,
    }
    expect(updateProductFailed()).toEqual(fixture);
  });

  test('form update action', () => {
    const data = {};
    const fixture = {
      type: PRODUCT_FORM_UPDATE,
      payload: data
    }
    expect(formUpdate(data)).toEqual(fixture);
  });

  test('reset product action', () => {
    const fixture = {
      type: RESET_PRODUCT,
    }
    expect(resetProduct()).toEqual(fixture);
  });
});
