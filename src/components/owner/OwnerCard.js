import React from "react"

const OwnerCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>{props.owner.name}, {props.owner.position}</h3>
                <h4>{props.owner.phone}</h4>
                <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Discharge</button>
            </div>
        </div>
    )
}

export default OwnerCard