import productsReducer, { initialState } from "redux/reducers/products";
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFail,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFail
} from "redux/actions/product";

let state = initialState;

describe('Products Reducer', () => {
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
   const expectedResult = state;
   expect(productsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('products fetch case', () => {
    const expectedResult = {
      ...state,
      isLoading: true,
      data: [],
    };
    expect(productsReducer(state, fetchProducts())).toEqual(expectedResult);
  });

  it('products fetch success case', () => {
    const products = [];
    const expectedResult = {
      ...state,
      isLoading: false,
      data: products,
    };
    expect(productsReducer(state, fetchProductsSuccess(products))).toEqual(expectedResult);
  });

  it('products fetch fail case', () => {
    const expectedResult = {
      ...state,
      isLoading: false,
      data: [],
    };
    expect(productsReducer(state, fetchProductsFail())).toEqual(expectedResult);
  });

  it('products delete case', () => {
    const id = 3434;
    const expectedResult = {
      ...state,
      isDeleting: true
    };
    expect(productsReducer(state, deleteProduct(id))).toEqual(expectedResult);
  });

  it('products delete success case', () => {
    state.data = [
      {
        id: 3434,
        name: "mock"
      }
    ];
    const id = 3434;
    const expectedResult = {
      ...state,
      isDeleting: false,
      data: []
    };
    expect(productsReducer(state, deleteProductSuccess(id))).toEqual(expectedResult);
  });

  it('products delete fail case', () => {
    const expectedResult = {
      ...state,
      isDeleting: false
    };
    expect(productsReducer(state, deleteProductFail())).toEqual(expectedResult);
  });
});
