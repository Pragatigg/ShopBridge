import { 
    PRODUCT_FETCH_INITIATED, 
    PRODUCT_FETCH_SUCCEEDED, 
    PRODUCT_FETCH_FAILED 
} from "../constants/products";

const initialState = {
    isLoading: false,
    data: [],
    totalCount: 0
};

const productReducer = (state=initialState, action) => {
    console.log(action);
    const { type, payload } = action;
    switch(type) {
        case PRODUCT_FETCH_INITIATED: return {
            isLoading: true,
            data: [],
            totalCount: 0
        }
        case PRODUCT_FETCH_SUCCEEDED: return {
            isLoading: false,
            data: payload,
            totalCount: 100,
        }
        case PRODUCT_FETCH_FAILED: return {
            isLoading: false,
            data: [],
            totalCount: 0
        }
        default: return state; 
    }
};

export default productReducer;