import React from "react"
import StudentsDetails from "./StudentsDetails"
import "./Students.css"

interface IStudentsDetailsDisplay{
    studentDetails:any,
    limiter:number,
    changeLimit:any
}

const StudentsDetailsDisplay:React.FC<IStudentsDetailsDisplay>=(props:any)=>{
 
  const changeLimitHandler=(event:any)=>{
    props.changeLimit(event.target.value)
 }

    return (
      <>
        <div className="divCount">
          <div>
            <label>Limiter</label>
            <input type="text" value={props.limiter} onChange={changeLimitHandler}></input>
          </div>
        </div>
        <div className="divSection" >
        {props.studentDetails.map((item: any, key: any) => {
          debugger
         if(key<props.limiter){
          return (   
              <div className="section" key={key}>
                <div>Name : {item.name} </div>
                <div>Phone Number : {item.phone}</div>
                <div>E-Mail : {item.email}</div>
                <div>Zip Code : {item.zipcode}</div>
              </div>
          );
          }
        })}
        </div>
      </>
    );
}

export default StudentsDetailsDisplay