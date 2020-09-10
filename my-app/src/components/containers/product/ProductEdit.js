import React, {Component} from 'react'
import {connect} from 'react-redux'
import {productCreate, productUpdate, productFetch} from '../../../actions'
import Header from '../../Header'
import ProductForm from '../../product/ProductForm'
import Footer from '../../Footer'

class ProductEdit extends Component{

    componentDidMount() {
        const {match} = this.props
        if(match.params.id) {
            this.props.productFetch(match.params.id)
        }
    }

    render() {
        const {formValues, match, products, productCreate, productUpdate} = this.props
        return (
            <div>
                <Header/>
                    <div className="container col-8 mx-auto">
                        {match.path.indexOf("add") > 0 && (
                        <div className="my-3">
                            <h2 className="title">เพิ่มสินค้า</h2>
                            {
                                products.saved && (
                                    <div className="alert alert-secondary title">
                                        {products.msg}
                                    </div>
                                )
                            }
                            <ProductForm onProductSubmit={() => productCreate(formValues)}/>
                        </div>
                           
                        )}
                        {match.path.indexOf("edit") > 0 && (
                            <div className="my-3">
                                <h2 className="title">แก้ไขสินค้า</h2>
                                {
                                    products.saved && (
                                        <div className="alert alert-secondary title">
                                            {products.msg}
                                        </div>
                                    )
                                }
                                <ProductForm onProductSubmit={() => productUpdate(products.id, formValues) }/>
                            </div>
                        )}
                    </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps({form, products}) {
    return {formValues: form.productForm ? form.productForm.values:null, products}
}

export default connect(mapStateToProps, {productCreate, productUpdate, productFetch})(ProductEdit)
