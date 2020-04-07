import React, { Component } from 'react'
import Selectors from './Selectors';



export default class Preference extends Component {

    render() {
        let preferences = false;
        return (
            <div className='container mb-4'>
                <div className="card p-2 mt-4 pb-3">
                    <div className="text-center">
                        <h2 className="display-4">Choose Your Interest</h2>
                        <h4 className='text-primary'>Arpit Mishra</h4>
                        <h5 className='text-secondary'>Trending feeds, Reviews according to your interest.</h5>
                    </div>
                    <hr />

                    <div className="mt-2 row">

                        <div className="col-lg-7 p-4 ml-4  ">
                            <h4 className=' mb-4'>Select your favourite fields.</h4>


                            <input type="search" className='form-control search d-block mb-2' placeholder='Sports,Entertainment and etc.' />



                            <hr />

                            <Selectors />

                        </div>

                        <div className="col-lg container">

                            <div className="mt-4 p-2" style={{ borderLeft: "4px solid #f5f5f7", height: "300px" }}>
                                {(!preferences) ? <div className="text-center">
                                    <i class="far fa-frown-open fa-2x mt-3"></i>
                                    <h5 className='text-secondary'>No category selected</h5></div> : null}


                            </div>


                        </div>


                    </div>
                    <div>
                        <button className='btn btn-outline-primary float-right mr-4'>Next</button></div>
                </div></div>
        )
    }

}

