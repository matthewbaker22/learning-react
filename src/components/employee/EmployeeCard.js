import React from "react";
import { Link } from "react-router-dom";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-petname">{props.employee.name}</span>
        </h3>
        <p>Position: {props.employee.position}</p>
        <button
          type="button"
          onClick={() => props.deleteEmployee(props.employee.id)}
        >
          Discharge
        </button>
        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => {
            props.history.push(`/employees/${props.employee.id}/edit`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
