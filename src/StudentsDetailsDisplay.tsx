import React from "react"
import StudentsDetails from "./StudentsDetails"
import "./Students.css"

interface IStudentsDetailsDisplay{
    studentDetails:any,
    limiter:number,
    onLimitChange(data:any):any
}

const StudentsDetailsDisplay:React.FC<IStudentsDetailsDisplay>=(props:any)=>{
    const onLimitChange=(event:any)=>{
        props.onLimitChange(event.target.value);
    }
    
    return (
      <>
        <div className="divCount">
          <div>
            <label>Count</label>
            <input type="text" value={props.studentDetails.length} onChange={onLimitChange}></input>
          </div>
        </div>

        {props.studentDetails.map((item: any, key: any) => {
        // if(key==props.limiter){
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
        // }
        })}
      </>
    );
}

export default StudentsDetailsDisplay