import React, { useState, useEffect } from 'react'
import LocationManager from '../../modules/LocationManager'
import './LocationDetail.css'

const LocationDetail = props => {
    const [location, setLocation] = useState({ city: "", state: "" })

    useEffect(() => {
        LocationManager.get(props.locationId)
            .then(location => {
                setLocation({
                    city: location.city,
                    state: location.state
                })
            })
    }, [props.locationId])

    return (
        <div className="card">
            <div className="card-content">
                <h3>City: <span style={{ color: 'darkslategrey' }}>{location.city}</span></h3>
                <p>State: {location.state}</p>
            </div>
        </div>
    )
}

export default LocationDetail