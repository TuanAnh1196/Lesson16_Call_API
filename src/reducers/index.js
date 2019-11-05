import {combineReducers} from 'redux';
import products from './product';
import ItemEditing from './ItemEditing';
const  appReducers = combineReducers({
   products: products,
   ItemEditing: ItemEditing
});
export default appReducers;