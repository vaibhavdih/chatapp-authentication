import React, { Component } from 'react'
import Sign from './Sign';
import Login from './Login';

export default class LoginAndSign extends Component {
    constructor() {
        super()
        this.state = {
            login: false

        }


    }


    render() {
        return (
            <div style={{ height: "70vh" }}>
                <div className="container mt-4 p-4 row mt-4" >
                    <div className="col-lg-7 text-center" style={{ marginTop: '3%' }}>
                        <img src={require("../../src/images/coding.png")} alt="" />
                        <div className="row">
                            <div className="col-lg-3 ">
                                <img src={require("../images/gears.png")} alt="" className='' />
                                <h6>Unique</h6>
                            </div>
                            <div className="col-lg-3">

                                <img src={require("../../src/images/programmer1.png")} alt="" className='' />
                                <h6>Unique</h6>
                            </div>
                            <div className="col-lg-3">
                                <img src={require("../../src/images/programmer2.png")} alt="" />
                                <h6>Unique</h6>
                            </div>
                            <div className="col-lg-3">
                                <img src={require("../../src/images/web-site.png")} alt="" className='' />
                                <h6>Unique</h6>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-5">
                        <form action="" className="form-group">
                            <div className="card p-4" style={{ display: 'block' }} >
                                <img src={require("../images/programmer.png")} alt="" style={{ marginTop: "-50px", marginLeft: "40%" }} />


                                {!this.state.login ? <Sign toggler={this.loginToggler} /> : <Login toggler={this.loginToggler} />}
                            </div>
                        </form>

                    </div>


                </div>

            </div>
        )
    }

    loginToggler = (toggler) => {
        console.log(toggler)
        this.setState({
            login: toggler
        })

    }

}
