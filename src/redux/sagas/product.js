import { call, put, takeLatest } from 'redux-saga/effects';
import { PRODUCT_FETCH_INITIATED } from '../constants/products';
import { fetchProductsSuccess, fetchProductsFail } from '../actions/product';
import axios from "axios";

function* fetchProducts() {
    try {
       const response = yield call(axios.get, "http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx");
       const { data = [] } = response;
       yield put(fetchProductsSuccess(data));
    } catch (e) {
       const { message = "somthing went wrong" } = e.response;
       yield put(fetchProductsFail(message));
    }
}

export default function* productSaga() {
    yield takeLatest(PRODUCT_FETCH_INITIATED, fetchProducts);
}