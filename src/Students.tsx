import React from "react"
import StudentsLogin from "./StudentsLogin"
import "./Students.css"

const Students=()=>{
    return(
        <div className="container">
        <h2 className="headerLogin">React Login App</h2>
        <div className="wrapper">
          <StudentsLogin />
        </div>
      </div>
    )
}
export default Students