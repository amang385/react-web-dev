import React, {Component} from "react"
import Calculator from './Calculator'
import ProductList  from '../product/ProductList'
import axios from "axios"

class Monitor extends Component {
    constructor(props) {
        super(props)
        this.state = {totalPrice: 0, orders: [], confirm: false, msg:''}
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
        this.cancleOrder = this.cancleOrder.bind(this)
        this.confirmOrder = this.confirmOrder.bind(this)
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id == product.id);
        if(findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({product: product, quantity: 1});
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice: totalPrice, orders: this.state.orders, confirm : false});
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id == product.id);
        let resultOrder = this.state.orders.filter(order => order.product.id != product.id)
        let totalPrice = this.state.totalPrice - (findOrder.quantity * findOrder.product.unitPrice)
        this.setState({totalPrice:totalPrice , orders:resultOrder, confirm : false})
    }

    cancleOrder() {
        this.setState({totalPrice: 0, orders: []})
    }

    confirmOrder() {
        const {totalPrice, orders} = this.state
        if (orders && orders.length > 0) {
            axios.post('http://localhost:3000/orders', {
                orderDate: new Date(),
                totalPrice,
                orders
            })
            .then(res => {
                this.setState({totalPrice: 0, orders: [], confirm: true, msg: 'บันทึกรายการสั่งซื้อเรียบร้อยแล้วครับ'})
            })
        } else {
            this.setState({totalPrice: 0, orders: [], confirm: true, msg: 'กรุณาเลือกสินค้าก่อนบันทึกการสั่งซื้อ'})
        }
    }

    render() {
        return (
            <div className="container-fluid">
                {
                    this.state.confirm &&
                    <div className="alert alert-secondary my-2 title text-right" role="alert">
                        {this.state.msg}
                    </div>
                }
                <div className="row">
                    <div className="col-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder}  />
                    </div>
                    <div className="col-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancleOrder={this.cancleOrder} onConfirmOrder={this.confirmOrder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor