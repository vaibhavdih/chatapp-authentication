import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'
import axios from 'axios';

class Login extends Component {
    render() {
        const user = {
            email: 'arpit',
            password: 123
        }
        return (
            <div className='card p-4'>
                <form className="form-group">

                    <input type="text" className="p-2 form-control  mb-2" placeholder='Email' name='email' />
                    <input type="text" className="p-2 form-control  mb-2" placeholder='Password' name='password' />



                    <button className='btn btn-success btn-sm btn-block my-4' onClick={(e) => {
                        this.props.history.push("/dashboard")
                        e.preventDefault();
                        axios.post("http://localhost:80/user/login", user

                        ).then((m) => {
                            console.log(m);
                            this.props.history.push("/dashboard")
                        }).catch((err) => { console.log(err) })

                    }}>LOGIN</button>
                    <hr />
                    <p className="text-secondary text-center">OR Login With</p>

                    <div className="extra-logins mt-3" >
              
                    <a href="http://localhost:9000/auth/google">Google </a>
                    <a href ="http://localhost:9000/auth/facebook">Facebook </a>
                        
                    </div>




                    <div className="card container mt-4">
                        <p className="text-secondary">No yet register, register now!</p>
                        <button className=" btn btn-outline-primary my-2"

                            onClick={(e) => {

                                e.preventDefault();

                                return this.props.toggler(false)
                            }
                            } >Sign-up</button>


                    </div></form></div>
        )
    }
}
export default withRouter(Login)