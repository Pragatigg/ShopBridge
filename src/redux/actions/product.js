import { 
    PRODUCT_FETCH_INITIATED, 
    PRODUCT_FETCH_SUCCEEDED, 
    PRODUCT_FETCH_FAILED, 
    PRODUCT_DELETE_INITIATED,
    PRODUCT_DELETE_SUCCEEDED,
    PRODUCT_DELETE_FAILED
} from 'redux/constants/products';

export const fetchProducts = () => ({
    type: PRODUCT_FETCH_INITIATED
});

export const fetchProductsSuccess = data => ({
    type: PRODUCT_FETCH_SUCCEEDED,
    payload: data
});

export const fetchProductsFail = error => ({
    type: PRODUCT_FETCH_FAILED,
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