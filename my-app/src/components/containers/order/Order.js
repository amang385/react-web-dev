import React, { Component } from 'react';
import Header from '../../Header'
import Footer from '../../Footer'
import axios from 'axios'
import { connect } from 'react-redux'
import {ordersFetch, orderDelete} from '../../../actions'

class Order extends Component {

    constructor(props) {
        super(props)
        // this.state = {orders: null}
    }

    componentDidMount() {
        // axios.get('http://localhost:3000/orders')
        // .then(res => {
        //     this.setState({orders: res.data})
        // })
        this.props.ordersFetch()
    }

    delOrder(order) {
        // axios.delete('http://localhost:3000/orders/' + order.id)
        // .then(res => {
        //     axios.get('http://localhost:3000/orders')
        //     .then(res => {
        //         this.setState({orders: res.data})
        //     })
        // })
        this.props.orderDelete(order.id)
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderDate)
            console.log(date);
            return (
                <div key={order.id} className="col-md-12">
                    <hr/>
                    <p className="text-right">
                        <button className="btn btn-sm btn-danger title"  onClick={() => this.delOrder(order)}>X</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (
                                <li>
                                    {record.product.productName} X {record.quantity} = {record.product.unitPrice * record.quantity}
                                </li>
                            )
                        })}
                    </ul>
                    <p className="title text-success">ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header/>
                    <div className="container-fluid my-3">
                        <h1>รายการสั่งซื้อ</h1>
                        <div className="row">
                            {this.showOrders()}
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps({orders}) {
    return { orders }
}

export default connect(mapStateToProps, {ordersFetch, orderDelete})(Order)