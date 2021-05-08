import {
    PRODUCTS_FETCH_INITIATED,
    PRODUCTS_FETCH_SUCCEEDED,
    PRODUCTS_FETCH_FAILED,
    PRODUCT_DELETE_INITIATED,
    PRODUCT_DELETE_SUCCEEDED,
    PRODUCT_DELETE_FAILED
} from 'redux/constants/products';

export const initialState = {
    isLoading: false,
    data: [],
    isDeleting: false
};

const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case PRODUCTS_FETCH_INITIATED: return {
            ...state,
            isLoading: true,
            data: [],
        }
        case PRODUCTS_FETCH_SUCCEEDED: return {
            ...state,
            isLoading: false,
            data: payload,
        }
        case PRODUCTS_FETCH_FAILED: return {
            ...state,
            isLoading: false,
            data: [],
        }
        case PRODUCT_DELETE_INITIATED: return {
           ...state,
           isDeleting: true,
        }
        case PRODUCT_DELETE_SUCCEEDED: return {
            ...state,
            data: state.data.filter(product => product.id !== payload),
            isDeleting: false,
        }
        case PRODUCT_DELETE_FAILED: return {
            ...state,
            isDeleting: false,
        }
        default: return state;
    }
};

export default productsReducer;
