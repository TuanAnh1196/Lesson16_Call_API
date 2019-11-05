import {combineReducers} from 'redux';
import products from './product'
const  appReducers = combineReducers({
   products: products
});
export default appReducers;