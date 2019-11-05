import * as Types from '../constants/ActionTypes';

var initialState = [
];

var appReducers = (state = initialState, action) => {
    var { id, product } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        case Types.DELETE_PRODUCT:
            return state.filter((product, index) => {
                return product.id !== id;
            });
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            return state.map((item, index) => {
                if (item.id === product.id) { //tim id va return ve product da edit
                    return product; 
                }
                return item;
            })
        default:
            return [...state];
    }

};

export default appReducers;