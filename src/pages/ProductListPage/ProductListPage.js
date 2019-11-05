import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';

class ProductListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            products: []
        };
    }
    componentDidMount(){
        callApi('products', 'GET', null).then(res=>{
            this.setState({
                products: res.data
            });
        });
    }

    onDelete = (id)=>{
        callApi(`products/${id}`, 'DELETE', null).then(res=>{
            //xoa tren api roi thi xoa luon tai local
            let productArr = [];
            let {products} = this.state;
            if(res.status===200){
                productArr = products.filter((product)=>{
                    return product.id !==id; 
                });
                this.setState({
                    products: productArr
                });
            }
        });
    }
    render() {
        // var {products} = this.props;
        var {products} = this.state;
        return (
            <div className="mb-10">
                <Link to="/product/add" type="button" className="btn btn-info ">
                    Thêm Sản Phẩm
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
    showProducts=(products) =>{
        var result= null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem 
                        key={index}
                        product={product} 
                        index={index}
                        onDelete={this.onDelete}
                    />
                );

            });
        }
        return result;
    }
}

const mapStateToProps = (state)=>{
    return {
        products: state.products,
    }
};
export default connect(mapStateToProps,null)(ProductListPage);
