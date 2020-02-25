import React from "react"
import './Employee.css'

const EmployeeCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-petname">{props.employee.name}</span></h3>
                <p>Position: {props.employee.position}</p>
                <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Discharge</button>
            </div>
        </div>
    )
}

export default EmployeeCard