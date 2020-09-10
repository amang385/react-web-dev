import React from "react"
import {Switch , Route} from 'react-router-dom' 
import Home from './containers/Home'
import About from './containers/About'
import Order from './containers/order/Order'
import Product from './containers/product/Product'
import ProductEdit from './containers/product/ProductEdit'
import NotFound from './containers/error/NotFound'

const main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/add" component={ProductEdit} />
        <Route exact path="/products/edit/:id" component={ProductEdit} />

        <Route component={NotFound} />
    </Switch>
)

export default main