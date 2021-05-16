import React, { Component } from 'react'
import PropTypes from "prop-types";
import Stats from '../components/Stats'
import Last from '../components/Last'
const API = 'http://localhost:3030/api/product/lastproduct/1'


class LastProduct extends Component {

    constructor(props){
        super(props)
        this.state={
            lastProduct:null,
        }
    }

    componentDidMount(){
        fetch(API)
          .then(res => res.json())
          .then(body => {
              console.log(body.data.name)
            // guardamos la data que viene de la API al state
            this.setState({
              lastProduct: body.data,
            })
          })
          
    }

    

       
    render () {
        const {lastProduct}=this.state
        return (
            <div>
                {lastProduct && (
                    <Last 
                    image={lastProduct.image}
                    name={lastProduct.name}
                    description={lastProduct.description}
                    price={lastProduct.price}
                    discount={lastProduct.discount}
                    
                    />)
                }
                                
               
            </div>
        );
    }

}

export default LastProduct;
