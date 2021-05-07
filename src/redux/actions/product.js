import { 
    PRODUCT_FETCH_INITIATED, 
    PRODUCT_FETCH_SUCCEEDED, 
    PRODUCT_FETCH_FAILED 
} from 'redux/constants/products';

export const fetchProducts = () => ({
    type: PRODUCT_FETCH_INITIATED
});

export const fetchProductsSuccess = (data) => ({
    type: PRODUCT_FETCH_SUCCEEDED,
    payload: data
});

export const fetchProductsFail = (error) => ({
    type: PRODUCT_FETCH_FAILED,
    payload: error
});