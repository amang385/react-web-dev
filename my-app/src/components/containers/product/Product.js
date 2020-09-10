import React , {Component} from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import ProductList from '../../product/ProductList'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {productsFetch, productDelete} from '../../../actions'

class Product extends Component {
    constructor(props) {
        super(props)
        // this.state = {products: null}
        this.delProduct = this.delProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount() {
        // axios.get("http://localhost:3000/products")
        // .then(res => {
        //     this.setState({products: res.data})
        // })
        // .catch(err => {
        //     console.error(err); 
        // })
        
        this.props.productsFetch()
    }

    delProduct(product) {
        // axios.delete('http://localhost:3000/products/' + product.id)
        // .then(res => {
        //     axios.get('http://localhost:3000/products')
        //     .then(res => {
        //         this.setState({products: res.data})
        //     })
        // })

        this.props.productDelete(product.id)
    }

    editProduct(product) {
        this.props.history.push(`/products/edit/${product.id}`)
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1>สินค้า</h1>
                        </div>
                        <div className="col">
                            <button className="btn btn-success title float-right" onClick={() => this.props.history.push('/products/add')} >เพิ่มสินค้า</button>
                        </div>
                    </div>
                    {this.props.products && Array.isArray(this.props.products) && 
                    (
                        <ProductList 
                        products={this.props.products}
                        onDelProduct={this.delProduct}
                        onEditProduct={this.editProduct}
                    />
                    )
                    }
                    
                </div>
                <Footer company="test"/>
            </div>
        )
    }
}

function mapStateToProps({products}) {
    return {products}
}

export default withRouter(connect(mapStateToProps, { productsFetch, productDelete }) (Product))