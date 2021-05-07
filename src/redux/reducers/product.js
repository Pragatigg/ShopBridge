import {
    PRODUCT_FETCH_INITIATED,
    PRODUCT_FETCH_SUCCEEDED,
    PRODUCT_FETCH_FAILED,
    PRODUCT_UPDATE_INITIATED,
    PRODUCT_UPDATE_SUCCEEDED,
    PRODUCT_UPDATE_FAILED,
    PRODUCT_FORM_UPDATE,
    RESET_PRODUCT
} from 'redux/constants/products';

const initialState = {
    isLoading: false,
    data: {},
    isUpdating: false,
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
        case PRODUCT_UPDATE_INITIATED: return {
          ...state,
          isUpdating: true,
        }
        case PRODUCT_FORM_UPDATE: return {
          ...state,
          data: payload,
        }
        case PRODUCT_UPDATE_SUCCEEDED:
        case PRODUCT_UPDATE_FAILED: return {
          ...state,
          isUpdating: false,
        }
        case RESET_PRODUCT: return initialState;
        default: return state;
    }
};

export default productReducer;
