import React from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: '',

        };
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    //sau khi render
    componentDidMount() {
        console.log('componentDidMount');

        let { match } = this.props;
        if (match) {
            let id = match.params.id; //lay id tren url
            this.props.onEditProduct(id);
        }
    }
    //nhan props thi goi lycycle, thuc thi khi nhan 1 props
    componentWillReceiveProps(nextProps) {
        //set state de hien thi du lieu len form
        if (nextProps && nextProps.ItemEditing) {
            let { ItemEditing } = nextProps;
            console.log(ItemEditing);
            
            this.setState({
                id: ItemEditing.id,
                txtName: ItemEditing.name,
                txtPrice: ItemEditing.price,
                chkbStatus: ItemEditing.status
            });
        }
    }

    onSave = (e) => { //khi bam nut luu lai
        e.preventDefault();
        let { id, txtName, txtPrice, chkbStatus } = this.state;
        console.log(id);
        
        let { history } = this.props;
        let product = {
            id: id, //co the la null thi tu dong tang
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        //update san pham   
        if (id) {
            this.props.onUpdateProduct(product);
            history.goBack();

        } else {//them moi san pham
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    render() {
        let { txtName, txtPrice, chkbStatus } = this.state;
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <form onSubmit={this.onSave}>
                    <legend>Form title</legend>

                    <div className="form-group">
                        <label>Tên Sản Phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái: </label>
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="chkbStatus"
                                    value={chkbStatus}
                                    onChange={this.onChange}
                                    checked={chkbStatus}
                                />
                                Còn hàng
                            </label>
                        </div>
                    </div>
                    <Link to="/product-list" className="btn btn-danger">Trở Lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ItemEditing: state.ItemEditing
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product)=>{
            dispatch(actUpdateProductRequest(product));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);