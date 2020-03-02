import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const deleteEmployee = id => {
    EmployeeManager.delete(id).then(() =>
      EmployeeManager.getAll().then(setEmployees)
    );
  };

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      setEmployees(employeesFromAPI);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          Admit Employee
        </button>
      </section>
      <div className="container-cards">
        {employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
