import productReducer from './product';
import productsReducer from './products';

const rootReducer = {
  products: productsReducer,
  product: productReducer
};

export default rootReducer;