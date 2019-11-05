import * as types from '../constants/ActionTypes';
var initialState = [
    {
        id: 1,
        name: 'Iphone 6 Plus',
        price: 400,
        status: true,
    },
    {
        id: 2,
        name: 'Sumsung Galaxy S7',
        price: 600,
        status: false,
    },
    {
        id: 3,
        name: 'XiaoMi Note 7',
        price: 500,
        status: true,
    }
    

];

var appReducers = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }

};

export default appReducers;