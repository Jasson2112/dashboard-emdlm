import React, { Component } from 'react'
import '../App.css';
import PropTypes from "prop-types";
import Stats from '../components/Stats'
import ListProducts from '../components/ListProducts'
const API = 'http://localhost:3030/api/products'


class Products extends Component {

    constructor(props){
        super(props)
        this.state={
            products:null,
        }
    }

    componentDidMount(){
        fetch(API)
          .then(res => res.json())
          .then(body => {
              
            // guardamos la data que viene de la API al state
            this.setState({
              products: body.data
              
            })
          })
          
    }

    

       
    render () {
        const {products}=this.state
        return (
            <div>
                {console.log(products)}
                {products && <ListProducts products={products} />}
                                
               
            </div>
        );
    }

}

export default Products;