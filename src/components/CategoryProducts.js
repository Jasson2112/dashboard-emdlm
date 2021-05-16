import React, { Component } from 'react'
import '../App.css';
import PropTypes from "prop-types";
import Stats from '../components/Stats'
import ListCategory from '../components/ListCategory';
const API = 'http://localhost:3030/api/productscategories'


class CategoryProducts extends Component {

    constructor(props){
        super(props)
        this.state={
            categoryProducts:null,
        }
    }

    componentDidMount(){
        fetch(API)
          .then(res => res.json())
          .then(body => {
              
            // guardamos la data que viene de la API al state
            this.setState({
                categoryProducts: body.data
              
            })
          })
          
    }

    

       
    render () {
        const {categoryProducts}=this.state
        return (
            <div className="car-body">
                {console.log(categoryProducts)}
                {categoryProducts && <ListCategory categoryProducts={categoryProducts} />}
                                
               
            </div>
        );
    }

}

export default CategoryProducts;