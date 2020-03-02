import React, { useState, useEffect } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  const deleteLocation = id => {
    LocationManager.delete(id).then(() =>
      LocationManager.getAll().then(setLocations)
    );
  };

  const getLocations = () => {
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/locations/new");
          }}
        >
          Admit Location
        </button>
      </section>

      <div className="container-cards">
        {locations.map(location => (
          <LocationCard
            key={location.id}
            location={location}
            deleteLocation={deleteLocation}
          />
        ))}
      </div>
    </>
  );
};

export default LocationList;
