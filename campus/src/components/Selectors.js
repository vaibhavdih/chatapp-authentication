import React, { Component } from 'react'

export default class Selectors extends Component {
    state = {
        preferenceList: []
    }
    iconTick = (e) => {
        let cList = Array.from(e.target.classList);
        cList = cList[0] + " " + cList[1]
        this.setState({
            preferenceList: [...cList]
        })
        if (!e.target.childElementCount) {
            e.target.style.boxShadow = 'none'

            e.target.style.borderLeft = '4px solid lightgreen'

            e.target.style.borderBottom = '4px solid lightgreen';
            let tick = document.createElement("a");
            tick.classList.add("fas", "fa-check-circle", "check", "text-success")

            e.target.appendChild(tick);


        }

        else {
            e.target.style.border = 'none';
            e.target.style.boxShadow = "2px 2px 2px 2px rgb(194, 194, 194)"
            e.target.removeChild(e.target.childNodes[0])




        };



    }



    render() {
        return (
            <div className='selectors'>




                <div className="row my-3">

                    <div className="col-sm-4">


                        <i class="far fa-futbol fa-2x text-primary" onClick={this.iconTick}
                        >


                        </i>
                        <p>Sports</p>
                    </div>
                    <div className="col-sm-4">
                        <i class="fas fa-film fa-2x text-primary" onClick={this.iconTick}></i>
                        <p>Entertainment</p>
                    </div>
                    <div className="col-xs-4">
                        <i class="fas fa-medkit fa-2x text-primary" onClick={this.iconTick}></i>
                        <p>Health</p>

                    </div>
                </div>

                <div className="row my-3">

                    <div className="col-lg-4">
                        <i class="fas fa-microchip  fa-2x text-primary" onClick={this.iconTick}></i>
                        <p>Technology</p>
                    </div>
                    <div className="col-lg-4">

                        <i class="fas fa-wallet  fa-2x text-primary" onClick={this.iconTick}></i>

                        <p>Money</p>
                    </div>
                    <div className="col-lg-4">

                        <i class="fas fa-book-open fa-2x text-primary" onClick={this.iconTick}></i>
                        <p>Education</p>
                    </div>
                </div>
            </div>



        )
    }
}
