import { combineReducers } from 'redux';
import { products } from './reducers/products';
import { itemEditting } from './reducers/itemEditting';
const appReducers = combineReducers({
    products: products,
    itemEditting: itemEditting
});
export default appReducers;