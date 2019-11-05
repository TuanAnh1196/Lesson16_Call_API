import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";

//call api and dispatch action(require use redux-thunk)
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', "GET", null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id)=>{
    return (dispatch) => {
        return callApi(`products/${id}`, "DELETE", null).then(res => {
            dispatch(actDeleteProduct(id));
        });
    };
}
export const actDeleteProduct = (id) =>{
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
export const actAddProductRequest= (product)=>{
    return (dispatch) => {
        return callApi(`products`, "POST", product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    };
}
export const actAddProduct = (product) =>{
    return {
        type: Types.DELETE_PRODUCT,
        product
    }
}
//hien thi du lieu can sua
export const actGetProductRequest= (id)=>{
    return (dispatch) => {
        return callApi(`products/${id}`, "GET", null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    };
}
export const actGetProduct = (product) =>{
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
//sua product
export const actUpdateProductRequest= (product)=>{
    return (dispatch) => {
        return callApi(`products/${product.id}`, "PUT", product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    };
}
export const actUpdateProduct = (product) =>{
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

