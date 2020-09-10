import React, {Component} from "react"

class Calculator extends Component {

    showOrders(orders) {
        console.log(orders);
        if(!orders || orders.length == 0) {
            return <li className="list-group-item text-success title">
                ไม่มีสินค้า
            </li>
        } else {
            return orders.map(order => {
                return <li key={order.product.id} className="text-right text-success title">
                {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity }
                <button className="btn btn-sm btn-light ml-2" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                 </li>
            })
        }

    }
    
    render() {
        const {totalPrice, orders} = this.props
        return (
            <div className="my-2">
                <ul className="list-group rounded-0 text-right">
                    <li className="list-group-item bg-default">
                        <h1>price : {totalPrice}</h1>
                    </li>
                    {this.showOrders(orders)}
                </ul>
                <button className="btn btn-block btn-danger mt-2" onClick={() => this.props.onConfirmOrder()}>ok</button>
                <button className="btn btn-block btn-secondary" onClick={() => this.props.onCancleOrder()}>cancle</button>


            </div>
        )
    }
}

export default Calculator;