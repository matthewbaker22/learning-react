import React, { useState, useEffect } from 'react'
import LocationManager from '../../modules/LocationManager'
import './LocationDetail.css'

const LocationDetail = props => {
    const [location, setLocation] = useState({ city: "", state: "" })
    const [isLoading, setIsLoading] = useState(true)

    const handleDelete = () => {
        setIsLoading(true)
        LocationManager.delete(props.locationId).then(() => 
            props.history.push("/location")
        )
    }

    useEffect(() => {
        LocationManager.get(props.locationId)
            .then(location => {
                setLocation({
                    city: location.city,
                    state: location.state
                })
                setIsLoading(false)
            })
    }, [props.locationId])

    return (
        <div className="card">
            <div className="card-content">
                <h3>City: <span style={{ color: 'darkslategrey' }}>{location.city}</span></h3>
                <p>State: {location.state}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>Discharge</button>
            </div>
        </div>
    )
}

export default LocationDetail