import * as Types from './actionTypes';

const initialState = [
];

const products = (state = initialState, action) => {
    const { id, product } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return action.products;
        case Types.DELETE_PRODUCT:
            return state.filter((product, index) => {
                return product.id !== id;
            });
        case Types.ADD_PRODUCT:
            return [
                ...state,
                action.product
            ];
        case Types.UPDATE_PRODUCT:
            return state.map((item, index) => {
                if (item.id === product.id) { //tim id va return ve product da edit
                    return product; 
                }
                return item;
            })
        default:
            return state;
    }

};

export default products;