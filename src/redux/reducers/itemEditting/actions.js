import * as Types from "./actionTypes";
import callApi from "./../../../utils/apiCaller";

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