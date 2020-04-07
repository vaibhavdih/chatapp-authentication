        import React, { Component } from 'react'


        export default class Dashboard extends Component {
            state={
                phone:0 
            }
            render() {
                return (
                    <div>
                        <div className=" mt-4 py-4">
                            <div className="card py-4 container">
                                <div className="row ">

                                    <div className="col-md-3 py-4  mt-4 ">
                                        <div className='text-center mr-4'>
                                        <div className='mb-3'>
                                        <img src={require("../images/letter-t.png")} alt="" className='mx-2'/>

                                        <img src={require("../images/letter-b.png")} alt=""/>
                                        </div>
                                            <img src={require("../images/user.png")} alt="" />
                                            <div className="ml-5 mt-4">

                                                <input
                                                type='file'
                                                
                                                
                                                
                                                
                                                style={{  }}name='Add Photo' /></div></div>
                                        

                                    </div>
                                    

                                    <div className="col-md-9 text-center py-4">
                                        <h1 className='d-inline'>Welcome </h1>
                                        <h3 className='text-info d-inline'>Arpit Mishra</h3>

                                        <h6 className="text-secondary mt-2">Fill out these details.</h6>


                                        <div className="card p-4 mt-4">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <form action="" className="form-group form-inline mt-4 ">


                                                

             <input type="number" name="" id="" className='form-control ml-2 phone  ' placeholder='Contact' onKeyDown={(e)=>{
      console.log(e.target.value.length)
                                                        
if(e.target.value.length==9)
{
this.setState({
    phone:Number(e.target.value)
})
}

if(e.target.value.length>9)
{
    e.target.value=this.state.phone;
}

                                                        }} />



                                                    </form></div>

                                                <div className="col-md-6">
                                                    <form action="" className="form-group form-inline mt-4 ">


                                            

                 <input  name="" id=""  type='country'className='form-control ml-2 country'
                     placeholder='Country'/>



                                                    </form></div><div className="col-md-6">
                                 <form action="" className="form-group form-inline mt-4 ">


                                                        

     <input name="" id="" className='form-control ml-2 ls'
                                                        
                 placeholder='Date of birth' type='date'/>



                                                    </form></div>

                                                <div className="col-lg-6">
                


                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className=''>
                                    <button className="btn btn-primary d-inline-block
                                    float-right mr-2">Next</button></div>
                            </div>

                        </div>

                    </div>
                )
            }
        }

