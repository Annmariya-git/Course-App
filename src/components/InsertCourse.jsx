import React from 'react'
import NavCourse from './NavCourse'
import { useState } from 'react'
import axios from 'axios'


const InsertCourse = () => {

const [input,changeInput] = useState({

    course_name: "", 
    duration: "",    
    fee: "",    
    mode: "",    
    trainer: ""
})

const inputHandler = (event)=>{

  changeInput({...input,[event.target.name]:event.target.value})
}
 const readvalue=()=>{

 console.log(input)
 axios.post("https://host-demo-app.onrender.com/api/add-course",input).then(

    (response)=>{

        console.log(response.data)
    }
 ).catch() 
 }

    return (
        <div>
            <NavCourse />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course_Name</label>
                                <input type="text" className="form-control" name="course_name" value={input.course_name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="num/text" className="form-control" name="duration" value={input.duration} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Fee</label>
                                <input type="num" className="form-control" name="fee" value={input.fee} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mode</label>
                                <select className="form-select" name="mode" value={input.mode} onChange={inputHandler}>
                                <option value="">Select Mode</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                                <option value="Hybrid">Hybrid</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Trainer</label>
                                <input type="text" className="form-control" name="trainer" value={input.trainer} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <button className="btn btn-success" onClick={readvalue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

export default InsertCourse