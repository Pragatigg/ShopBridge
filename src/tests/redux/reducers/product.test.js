import productReducer, { initialState } from "redux/reducers/product";
import {
  fetchProduct,
  fetchProductSuccess,
  fetchProductFail,
  updateProduct,
  updateProductSuccess,
  updateProductFailed,
  formUpdate,
  resetProduct
} from "redux/actions/product";

let state = initialState;

describe('Product Reducer', () => {
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
   const expectedResult = state;
   expect(productReducer(undefined, {})).toEqual(expectedResult);
  });

  it('product fetch case', () => {
    const expectedResult = {
      ...state,
      isLoading: true,
      data: {}
    };
    expect(productReducer(state, fetchProduct())).toEqual(expectedResult);
  });

  it('product fetch success case', () => {
    const product = {}
    const expectedResult = {
      ...state,
      isLoading: false,
      data: product
    };
    expect(productReducer(state, fetchProductSuccess(product))).toEqual(expectedResult);
  });

  it('product fetch fail case', () => {
    const expectedResult = {
      ...state,
      isLoading: false,
      data: {}
    };
    expect(productReducer(state, fetchProductFail())).toEqual(expectedResult);
  });

  it('product update case', () => {
    const expectedResult = {
      ...state,
      isUpdating: true
    };
    expect(productReducer(state, updateProduct())).toEqual(expectedResult);
  });

  it('product update success case', () => {
    const expectedResult = {
      ...state,
      isUpdating: false
    };
    expect(productReducer(state, updateProductSuccess())).toEqual(expectedResult);
  });

  it('product update fail case', () => {
    const expectedResult = {
      ...state,
      isUpdating: false
    };
    expect(productReducer(state, updateProductFailed())).toEqual(expectedResult);
  });

  it('product form update case', () => {
    const product = {};
    const expectedResult = {
      ...state,
      data: product
    };
    expect(productReducer(state, formUpdate(product))).toEqual(expectedResult);
  });

  it('reset product case', () => {
    expect(productReducer(state, resetProduct())).toEqual(initialState);
  });
});
