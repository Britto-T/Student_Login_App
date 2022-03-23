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
            <label>Count</label>
            <input type="text" value={props.limiter} onChange={changeLimitHandler}></input>
          </div>
        </div>

        {props.studentDetails.map((item: any, key: any) => {
         if(key<props.limiter){
          return (   
            <div className="divSection" key={key}>
              <div className="section">
                <div>Name : {item.name} </div>
                <div>Phone Number : {item.phone}</div>
                <div>E-Mail : {item.email}</div>
                <div>Zip Code : {item.zipcode}</div>
              </div>
            </div>
             
          );
          }
        })}
      </>
    );
}

export default StudentsDetailsDisplay