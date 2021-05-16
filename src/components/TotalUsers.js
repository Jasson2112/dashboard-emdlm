import React, { Component } from 'react'
import PropTypes from "prop-types";
import Stats from '../components/Stats'
const API = 'http://localhost:3030/api/users'



class TotalUsers extends Component {

    constructor(props){
        super(props)
        this.state={
            totalUsers:null,
        }
    }

    componentDidMount(){
        fetch(API)
          .then(res => res.json())
          .then(body => {
            // guardamos la data que viene de la API al state
            this.setState({
              totalUsers: body.meta.totalusers,
            })
          })
          
    }

    

       
    render () {
        const {totalUsers}=this.state
        return (
            <div>
                {totalUsers && (
                    <>
                        
                        <Stats value={totalUsers} />
                        
                    </>
                )}
                                
               
            </div>
        );
    }

}

export default TotalUsers;