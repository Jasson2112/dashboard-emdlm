import React, { Component } from 'react'
import PropTypes from "prop-types";
import Stats from '../components/Stats'
const API = 'http://localhost:3030/api/categories'



class TotalCategories extends Component {

    constructor(props){
        super(props)
        this.state={
            totalCategories:null,
        }
    }

    componentDidMount(){
        fetch(API)
          .then(res => res.json())
          .then(body => {
            // guardamos la data que viene de la API al state
            this.setState({
              totalCategories: body.meta.totalCategories,
            })
          })
          
    }

    

       
    render () {
        const {totalCategories}=this.state
        return (
            <div>
                {totalCategories && (
                    <>
                        
                        <Stats value={totalCategories} />
                        
                    </>
                )}
                                
               
            </div>
        );
    }

}

export default TotalCategories;