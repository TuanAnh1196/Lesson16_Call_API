import * as Types from '../constants/ActionTypes';

const initialState = {};

const ItemEditing = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }

};

export default ItemEditing;