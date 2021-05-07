import { 
    PRODUCT_FETCH_INITIATED, 
    PRODUCT_FETCH_SUCCEEDED, 
    PRODUCT_FETCH_FAILED
} from 'redux/constants/products';

const initialState = {
    isLoading: false,
    data: {},
};

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case PRODUCT_FETCH_INITIATED: return {
            ...state,
            isLoading: true,
            data: {},
        }
        case PRODUCT_FETCH_SUCCEEDED: return {
            ...state,
            isLoading: false,
            data: payload,
        }
        case PRODUCT_FETCH_FAILED: return {
            ...state,
            isLoading: false,
            data: {},
        }
        default: return state; 
    }
};

export default productReducer;