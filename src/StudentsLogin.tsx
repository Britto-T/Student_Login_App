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
    setLimiter(limiter+1)
  };

    const onerror =()=>{
      
    }

    const changeLimit=(data:any)=>{
      setLimiter(Number(data));
    }

    return(
        <>
        <form onSubmit={handleSubmit(onFormSubmit,onerror)}>
          <div className="fieldWrapper">
            <div>
              <label>Student Name</label>
            </div>
            <div>
              <input type="text" {...register("name",{required:true,maxLength:30})} placeholder="User Name" />
              {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
            </div>
            <div>
              <label>Phone Number</label>
            </div>
            <div>
              <input
                type="number" {...register("phone",{required:true,maxLength:15})} placeholder="Phone Number"/>
               {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
            </div>
            <div>
              <label>E-Mail</label>
            </div>
            <div>
              <input type="text" {...register("email", {required:true,
              pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message:''},maxLength:30
            })} placeholder="E-Mail" />
              {errors?.email?.type ==="required" ?(
                <p className="errorSpan">Please Enter a E-mail</p>
              ):null}
               {errors?.email?.type ==="pattern" ?(
                <p className="errorSpan">Please enter a valid e-mail</p>
              ):null}
            </div>
            <div>
              <label>Zip Code</label>
            </div>
            <div>
              <input
                type="number" {...register("zipcode", {required: true,maxLength:6,minLength:6})} placeholder="Zip Code"
              />
              {errors?.zipcode?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
              {errors?.zipcode?.type ==="maxLength" ?(
                <p className="errorSpan">Please enter 6 digit valid zipcode</p>
              ):null}
                {errors?.zipcode?.type ==="minLength" ?(
                <p className="errorSpan">Please enter 6 digit valid zipcode</p>
              ):null}
            </div>
            <div>
              <button className="btnSubmit">Submit</button>
              <button type="reset" className="btnReset">Reset</button>
            </div>
          </div>
        </form>
        <div className="divSection">
        <StudentsDetailsDisplay studentDetails={studentDetails} limiter={limiter} changeLimit={changeLimit}></StudentsDetailsDisplay>
        </div>
      </>
    )
}

export default StudentsLogin