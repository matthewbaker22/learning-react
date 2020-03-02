import React, { useState } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import './EmployeeForm.css'

const EmployeeForm = props => {
    const [employee, setEmployee] = useState({name: "", position: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...employee }
        stateToChange[evt.target.id] = evt.target.value
        setEmployee(stateToChange)
        console.log(stateToChange)
    }

    const constructNewEmployee = evt => {
        evt.preventDefault()
        if (employee.name === "" || employee.position === "") {
            window.alert("Please input an employee name and position")
        } else {
            setIsLoading(true)
            EmployeeManager.post(employee)
                .then(() => props.history.push("/employees"))
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input 
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Employee Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="position"
                            placeholder="Employee Position"
                        />
                        <label htmlFor="position">Position</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default EmployeeForm