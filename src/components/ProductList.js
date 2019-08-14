import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

import '../App.css';
class ProductList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     login: '',
  //     url: ''
  //   };
  // }
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div> Error! {error.message} </div>;
    }

    if (loading) {
      return <div> Loading... </div>;
    }

    return (
      <ul>
        {' '}
        {products.map(product => (
          <ul key={product.id}>
            {' '}
            Name: {product.login} <br />
            URL: <a href="#"> {product.url} </a> <br />
            Type: {product.type} <br /> <br />
          </ul>
        ))}{' '}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductList);
