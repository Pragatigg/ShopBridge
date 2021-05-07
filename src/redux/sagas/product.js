import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { 
   PRODUCTS_FETCH_INITIATED, 
   PRODUCT_DELETE_INITIATED,
   PRODUCT_FETCH_INITIATED
} from 'redux/constants/products';
import { 
   fetchProductsSuccess, 
   fetchProductsFail, 
   deleteProductFail, 
   deleteProductSuccess, 
   fetchProductSuccess,
   fetchProductFail
} from 'redux/actions/product';
import { showNotification } from "utils";
import { API_BASE_URL } from "../../constants";

function* fetchProducts() {
    try {
        const response = yield call(
            axios.get, 
            `${API_BASE_URL}/products.json?brand=nyx`
        );
        const { data = [] } = response;
        yield put(fetchProductsSuccess(data));
    } catch (e) {
        const { message = "somthing went wrong" } = e.response || {};
        yield put(fetchProductsFail(message));
    }
}

function* deleteProduct(action) {
    const id = action.payload; 
    try {
        yield call(axios.delete,`${API_BASE_URL}/products/${id}.json`);
        yield put(deleteProductSuccess(id));
        showNotification("Product Deleted Successfully!");
     } catch (e) {
        const { message = "somthing went wrong" } = e.response || {};
        yield put(deleteProductFail(message));
        showNotification(message);
     }
}

function* fetchProduct(action) {
    const id = action.payload; 
    try {
        const response = yield call(axios.get,`${API_BASE_URL}/products/${id}.json`);
        const { data = {} } = response;
        yield put(fetchProductSuccess(data))
     } catch (e) {
        const { message = "somthing went wrong" } = e.response || {};
        yield put(fetchProductFail(message));
        showNotification(message);
     }
}

export default function* productSaga() {
    yield takeLatest(PRODUCTS_FETCH_INITIATED, fetchProducts);
    yield takeLatest(PRODUCT_DELETE_INITIATED, deleteProduct);
    yield takeLatest(PRODUCT_FETCH_INITIATED, fetchProduct);
}