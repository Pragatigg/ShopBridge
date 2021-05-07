import {
    PRODUCTS_FETCH_INITIATED,
    PRODUCTS_FETCH_SUCCEEDED,
    PRODUCTS_FETCH_FAILED,
    PRODUCT_DELETE_INITIATED,
    PRODUCT_DELETE_SUCCEEDED,
    PRODUCT_DELETE_FAILED,
    PRODUCT_FETCH_INITIATED,
    PRODUCT_FETCH_SUCCEEDED,
    PRODUCT_FETCH_FAILED,
    PRODUCT_UPDATE_INITIATED,
    PRODUCT_UPDATE_SUCCEEDED,
    PRODUCT_UPDATE_FAILED,
    RESET_PRODUCT
} from 'redux/constants/products';

export const fetchProducts = () => ({
    type: PRODUCTS_FETCH_INITIATED
});

export const fetchProductsSuccess = data => ({
    type: PRODUCTS_FETCH_SUCCEEDED,
    payload: data
});

export const fetchProductsFail = () => ({
    type: PRODUCTS_FETCH_FAILED,
});

export const deleteProduct = id => ({
    type: PRODUCT_DELETE_INITIATED,
    payload: id
});

export const deleteProductSuccess = (id) => ({
    type: PRODUCT_DELETE_SUCCEEDED,
    payload: id
});

export const deleteProductFail = () => ({
    type: PRODUCT_DELETE_FAILED,
});

export const fetchProduct = id => ({
    type: PRODUCT_FETCH_INITIATED,
    payload: id
});

export const fetchProductSuccess = data => ({
    type: PRODUCT_FETCH_SUCCEEDED,
    payload: data
});

export const fetchProductFail = () => ({
    type: PRODUCT_FETCH_FAILED,
});

export const updateProduct = (id, data) => ({
  type: PRODUCT_UPDATE_INITIATED,
  payload: { id, data }
});

export const updateProductSuccess = () => ({
  type: PRODUCT_UPDATE_SUCCEEDED,
});

export const updateProductFailed = () => ({
  type: PRODUCT_UPDATE_FAILED,
});

export const resetProduct = () => ({
  type: RESET_PRODUCT
});
