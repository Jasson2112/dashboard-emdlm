import React, { Component } from 'react'
import PropTypes from "prop-types";
import Stats from '../components/Stats'
const API = 'http://localhost:3030/api/products'



class TotalProducts extends Component {

    constructor(props){
        super(props)
        this.state={
            totalProducts:null,
        }
    }

    componentDidMount(){
        fetch(API)
          .then(res => res.json())
          .then(body => {
            // guardamos la data que viene de la API al state
            this.setState({
              totalProducts: body.meta.totalProducts,
            })
          })
          
    }

    

       
    render () {
        const {totalProducts}=this.state
        return (
            <div>
                {totalProducts && (
                    <>
                        
                        <Stats value={totalProducts} />
                        
                    </>
                )}
                                
               
            </div>
        );
    }

}

export default TotalProducts;