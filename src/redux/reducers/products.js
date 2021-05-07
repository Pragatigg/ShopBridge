import { 
    PRODUCTS_FETCH_INITIATED, 
    PRODUCTS_FETCH_SUCCEEDED, 
    PRODUCTS_FETCH_FAILED,
    PRODUCT_DELETE_INITIATED,
    PRODUCT_DELETE_SUCCEEDED,
    PRODUCT_DELETE_FAILED
} from 'redux/constants/products';

const initialState = {
    isLoading: false,
    data: [],
    totalCount: 0,
    isDeleting: false
};

const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case PRODUCTS_FETCH_INITIATED: return {
            ...state,
            isLoading: true,
            data: [],
            totalCount: 0
        }
        case PRODUCTS_FETCH_SUCCEEDED: return {
            ...state,
            isLoading: false,
            data: payload,
            totalCount: 100,
        }
        case PRODUCTS_FETCH_FAILED: return {
            ...state,
            isLoading: false,
            data: [],
            totalCount: 0
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