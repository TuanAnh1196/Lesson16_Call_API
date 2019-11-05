import React from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
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
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }


    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id; //lay id tren url
            callApi(`products/${id}`, "GET", null).then(res => { //lay chi tiet 1 product
                let data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                });
            });
        }
    }

    onSave = (e) => { //khi bam nut luu lai
        e.preventDefault();
        let { id, txtName, txtPrice, chkbStatus } = this.state;
        let { history } = this.props;
        //update san pham   
        if (id) {
            callApi(`products/${id}`,"PUT",{
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res =>{
                history.goBack();
            });
        } else {//them moi san pham
            callApi('products', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
                // history.push('/')
            });
        }

    }
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
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

export default ProductActionPage;
