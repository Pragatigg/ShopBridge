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
  updateProductFail,
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
  it('fetch products action', () => {
    const fixture = {
      type: PRODUCTS_FETCH_INITIATED
    }
    expect(fetchProducts()).toEqual(fixture);
  });

  it('fetch products success action', () => {
    const data = {};
    const fixture = {
      type: PRODUCTS_FETCH_SUCCEEDED,
      payload: data
    }
    expect(fetchProductsSuccess(data)).toEqual(fixture);
  });

  it('fetch products fail action', () => {
    const fixture = {
      type: PRODUCTS_FETCH_FAILED
    }
    expect(fetchProductsFail()).toEqual(fixture);
  });

  it('fetch product action', () => {
    const fixture = {
      type: PRODUCT_FETCH_INITIATED
    }
    expect(fetchProduct()).toEqual(fixture);
  });

  it('fetch product success action', () => {
    const data = {};
    const fixture = {
      type: PRODUCT_FETCH_SUCCEEDED,
      payload: data
    }
    expect(fetchProductSuccess(data)).toEqual(fixture);
  });

  it('fetch product fail action', () => {
    const fixture = {
      type: PRODUCT_FETCH_FAILED
    }
    expect(fetchProductFail()).toEqual(fixture);
  });

  it('delete product action', () => {
    const id = 2342;
    const fixture = {
      type: PRODUCT_DELETE_INITIATED,
      payload: id
    }
    expect(deleteProduct(id)).toEqual(fixture);
  });

  it('delete product success action', () => {
    const id = 2342;
    const fixture = {
      type: PRODUCT_DELETE_SUCCEEDED,
      payload: id
    }
    expect(deleteProductSuccess(id)).toEqual(fixture);
  });

  it('delete product fail action', () => {
    const fixture = {
      type: PRODUCT_DELETE_FAILED
    }
    expect(deleteProductFail()).toEqual(fixture);
  });

  it('update product action', () => {
    const id = 2342;
    const data = {};
    const fixture = {
      type: PRODUCT_UPDATE_INITIATED,
      payload: { id, data }
    }
    expect(updateProduct(id, data)).toEqual(fixture);
  });

  it('update product success action', () => {
    const fixture = {
      type: PRODUCT_UPDATE_SUCCEEDED,
    }
    expect(updateProductSuccess()).toEqual(fixture);
  });

  it('update product fail action', () => {
    const fixture = {
      type: PRODUCT_UPDATE_FAILED,
    }
    expect(updateProductFail()).toEqual(fixture);
  });

  it('form update action', () => {
    const data = {};
    const fixture = {
      type: PRODUCT_FORM_UPDATE,
      payload: data
    }
    expect(formUpdate(data)).toEqual(fixture);
  });

  it('reset product action', () => {
    const fixture = {
      type: RESET_PRODUCT,
    }
    expect(resetProduct()).toEqual(fixture);
  });
});
