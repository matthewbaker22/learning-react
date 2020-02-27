import React from "react"
import { Link } from "react-router-dom"
// import "./Location.css"

const LocationCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h1>Location</h1>
                <h3>{props.location.city}, {props.location.state}</h3>
                <Link to={`/locations/${props.location.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Discharge</button>
            </div>
        </div>
    )
}

export default LocationCard