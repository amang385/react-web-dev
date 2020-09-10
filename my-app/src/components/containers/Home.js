import React, { Component } from 'react';
// import logo from './logo.svg';
// import './Home.css';
import Header from '../Header'
import Footer from '../Footer'
import Monitor from '../monitor/Monitor'
import axios from 'axios'
import { connect } from 'react-redux';
import {productsFetch} from '../../actions'


class Home extends Component {
  constructor(props) {
    super(props)
    // this.state = {products: ""}
    }

    componentDidMount() {
        // axios.get('http://localhost:3000/products').then(res => this.setState({ products : res.data }))
        this.props.productsFetch()
    }

  render() {
    return (
      <div className="Home">
        <Header/>
        <Monitor products={this.props.products} />
        <Footer company="amang company" email="amang@mail.com" />
      </div>
    );
  }
}

// function mapStateToProps(state){
//     return {products: state.products}
// }

function mapStateToProps({products}){
    return {products}
}

export default connect(mapStateToProps, {productsFetch})(Home);
