import React from "react";
import { useState } from "react";

const FlightCard = ({ departure, destination, targetPrice, currency }) => {
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency,
  }).format(targetPrice);

  const [isTracking, setIsTracking] = useState(false);

  function handleTrackClick() {
    setIsTracking((previousValue) => !previousValue);
  }
  return (
    <div>
      <section className="card bg-base-100 shadow-sm mt-2 rounded-2xl">
        <div className="card-body bg-blue-200">
          <p>{isTracking ? "Tracking selected" : "Not tracking"}</p>
          <button
            type="button"
            onClick={handleTrackClick}
            className="btn btn-primary w-full md:w-fit"
          >
            {isTracking ? "Stop tracking" : "Track This flight"}
          </button>
          <p>Target price: {formattedPrice}</p>
          <h2 className="card-title">
            {departure} → {destination}
          </h2>
        </div>
      </section>
    </div>
  );
};

export default FlightCard;
