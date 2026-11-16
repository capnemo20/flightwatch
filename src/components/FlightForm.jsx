import React from "react";
import { useState } from "react";

const FlightForm = () => {
  const [destination, setDestination] = useState("");

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Destination submitted:", destination);
  };
  return (
    <div className="card mb-6 bg-base-100 shadow-sm">
      <form className="card-body" onSubmit={handleSubmit}>
        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          type="text"
          className="input input-bordered w-full"
          placeholder="For example, Rome"
          value={destination}
          onChange={handleDestinationChange}
          required
        ></input>
        <p>Selected destination: {destination}</p>
        <button type="submit" className="btn btn-primary">
          Add Flight
        </button>
      </form>
    </div>
  );
};

export default FlightForm;
