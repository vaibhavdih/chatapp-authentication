import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar bg-dark navbar-dark navbar-expand-md ">
                    <div className="container">
                        <a href="" className="navbar-brand">Fashcham</a>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="" className="nav-link">Home</a></li>

                            <li className="nav-item"><a href="" className="nav-link"><i class="fas fa-users"></i> </a></li>

                            <li className="nav-item"><a href="" className="nav-link"><i class="fas fa-comment"></i></a></li>

                            <li className="nav-item"><a href="" className="nav-link"><i class="fas fa-bell"></i> </a></li>



                            <li className="nav-item"><a href="" className="nav-link"><i class="fas fa-caret-down"></i></a></li>

                        </ul>
                    </div></nav>


            </div>

        )
    }
}
