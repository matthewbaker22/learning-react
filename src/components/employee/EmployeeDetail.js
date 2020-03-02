import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
// import './EmployeeDetail.css'

const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({ name: "", position: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          position: employee.position
        });
      });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
        <p>Position: {employee.position}</p>
      </div>
    </div>
  );
}

export default EmployeeDetail;
