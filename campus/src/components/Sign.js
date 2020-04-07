import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

 class Sign extends Component {
    render() {
       const user={
         name:'arpit',
         email:'ag90',
         password:'123'
         
    
        }
        return (
            <div className='card p-4'>
                <form className="form-group" >
                    <input type="text" className="p-2 form-control mb-2" placeholder='Name' name='name' />
                    <input type="text" className="p-2 form-control  mb-2" placeholder='Email' name='email' />
                    <input type="text" className="p-2 form-control  mb-2" placeholder='Password' name='password' />
                    <input type="text" className="p-2 form-control  mb-2" placeholder='Confirm Password' />
                    <div>
                        <input type="radio" />
                        <span className='text-secondary'>Accept our terms and conditions. <a href="/">clcik here</a></span>
                    </div>
                    <button className=" btn btn-primary mt-4" onClick={(e) => {e.preventDefault()
                        axios.post("http://localhost:80/user/register",user).then((m) => {
                            console.log("99",m)
                        this.props.history.push('/login');
                         
                        })
                    }}>Sign-up
    
    
                                </button>
                    <div className="card container mt-4">
                        <p className="text-secondary">Already have account so login</p>
                        <button className=" btn btn-outline-primary my-4"

                            onClick={(e) => {
                                e.preventDefault();
                                return this.props.toggler(true)
                            }
                            } >Sign-in</button>


                    </div></form></div>)



    }
}   
export default withRouter(Sign)