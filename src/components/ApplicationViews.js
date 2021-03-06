import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList";
import OwnerList from "./owner/OwnerList"
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";


const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={(props) => {
        return <AnimalList />
      }} 
      />
      <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
      }} 
      />
      <Route path="/employees" render={props => {
        return <EmployeeList />
      }}
      />
      <Route
        exact path="/location"
        render={props => {
          return <LocationList />
        }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}/>
      }} 
      />
      <Route
        path="/owner"
        render={props => {
          return <OwnerList />
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;