import React, { useState,useEffect } from "react"
import StudentsDetails from "./StudentsDetails"
import "./Students.css"
import StudentsDetailsDisplay from "./StudentsDetailsDisplay"
import axios from "axios"
import { useForm } from "react-hook-form";


const StudentsLogin=()=>{
  const [studentDetails, setStudentDetails]=useState<any>([])
  const [limiter, setLimiter]=useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  
  useEffect(() => {
    GetStudentData();
  }, []);

  const GetStudentData=()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response: any) => {
      const studentData =  StudentsDetails(response.data)
      setStudentDetails(studentData);
      setLimiter(response.data.length);
    })
    .catch((error: any) => {
      alert(error);
    });
  }

  const onLimitChange=(data:any)=>{
    alert();
    GetStudentData()
    setLimiter(data)
  }

  const onFormSubmit = (data: any) => {
    setStudentDetails([
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        zipcode: data.zipcode,
      },
      ...studentDetails
    ]);
  };

    const onerror =()=>{

    }

    return(
        <>
        <form onSubmit={handleSubmit(onFormSubmit, onerror)}>
          <div className="fieldWrapper">
            <div>
              <label>Student Name</label>
            </div>
            <div>
              <input type="text" {...register("name",{required:true})} placeholder="User Name" />
              {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
            </div>
            <div>
              <label>Phone Number</label>
            </div>
            <div>
              <input
                type="text" {...register("phone",{required:true,maxLength:15})} placeholder="Phone Number"/>
               {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
            </div>
            <div>
              <label>E-Mail</label>
            </div>
            <div>
              <input type="email" {...register("email", {required:true, 
              pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message:'Please enter a valid email'}
            })} placeholder="E-Mail" />
              {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
               {errors?.name?.type ==="required" ?(
                <p className="errorSpan">Please Enter a valid E-mail</p>
              ):null}
            </div>
            <div>
              <label>Zip Code</label>
            </div>
            <div>
              <input
                type="text" {...register("zipcode", {required: true})} placeholder="Zip Code"
              />
              {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
            </div>
            <div>
              <button className="btnSubmit">Submit</button>
              <button type="reset" className="btnReset">Reset</button>
            </div>
          </div>
        </form>
        <div className="divSection">
        <StudentsDetailsDisplay studentDetails={studentDetails} limiter={limiter} onLimitChange={onLimitChange}></StudentsDetailsDisplay>
        </div>
      </>
    )
}

export default StudentsLogin