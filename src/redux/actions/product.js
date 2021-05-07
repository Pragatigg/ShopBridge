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
} from 'redux/constants/products';

export const fetchProducts = () => ({
    type: PRODUCTS_FETCH_INITIATED
});

export const fetchProductsSuccess = data => ({
    type: PRODUCTS_FETCH_SUCCEEDED,
    payload: data
});

export const fetchProductsFail = error => ({
    type: PRODUCTS_FETCH_FAILED,
    payload: error
});

export const deleteProduct = id => ({
    type: PRODUCT_DELETE_INITIATED,
    payload: id
});

export const deleteProductSuccess = (id) => ({
    type: PRODUCT_DELETE_SUCCEEDED,
    payload: id
});

export const deleteProductFail = error => ({
    type: PRODUCT_DELETE_FAILED,
    payload: error
});

export const fetchProduct = id => ({
    type: PRODUCT_FETCH_INITIATED,
    payload: id
});

export const fetchProductSuccess = data => ({
    type: PRODUCT_FETCH_SUCCEEDED,
    payload: data
});

export const fetchProductFail = error => ({
    type: PRODUCT_FETCH_FAILED,
    payload: error
});