/*import { combineReducers } from "redux";
import { productReducer, seletedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProduct : productReducer,
    product : seletedProductReducer
});

export default reducers;*/

import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;