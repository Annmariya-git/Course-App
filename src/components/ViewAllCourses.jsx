import React, { useEffect, useState } from "react";
import axios from "axios";
import NavCourse from "./NavCourse";

const ViewAllCourses = () => {
    const[data,changeData]= useState([])

    const fetchdata = () => {
        axios.get("https://host-demo-app.onrender.com/api/courses").then(
    (response) => {
        changeData(response.data)
    }
).catch()
    }

    useEffect(
        ()=>{
            fetchdata()
        }
    )
       
    return (
        <div>
           <NavCourse />
            <div className="container mt-4">
                <div className="row g-4">
                    {data.map(
                        (value,index)=>
                        {return(
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Course App</h5>
                                <p><b>Course_name:</b>{value.course_name}</p>
                                <p><b>Created_at:</b>{value.created_at}</p>
                                <p><b>Duration:</b>{value.duration}</p>
                                <p><b>Fee:</b>{value.fee}</p>
                                <p><b>ID:</b>{value.id}</p>
                                <p><b>Mode:</b>{value.mode}</p>
                                <p><b>Trainer:</b>{value.trainer}</p>
                            </div>
                        </div>
                    </div>
                        )}
                    )}

                </div>
            </div>
        </div>
    );
};

export default ViewAllCourses