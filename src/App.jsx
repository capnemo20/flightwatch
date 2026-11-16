import { useState } from "react";
import { Plane, Bell } from "lucide-react";
import FlightCard from "./components/FlightCard";
import FlightForm from "./components/FlightForm";

function App() {
  const departure = "London";
  const destination = "Paris";
  const targetPrice = 100;
  const currency = "GBP";

  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(targetPrice);

  const [isTracking, setIsTracking] = useState(false);

  //   function handleTrackClick() {
  //   setIsTracking((previousValue) => !previousValue);
  // }

  function handleTrackClick() {
    if (isTracking === false) {
      setIsTracking(true);
    } else {
      setIsTracking(false);
    }
  }
  const flights = [
    {
      id: 1,
      departure: "London",
      destination: "Rome",
      targetPrice: 80,
      currency: "GBP",
    },
    {
      id: 2,
      departure: "London",
      destination: "Amsterdam",
      targetPrice: 120,
      currency: "EUR",
    },
    {
      id: 3,
      departure: "London",
      destination: "Barcelona",
      targetPrice: 90,
      currency: "GBP",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200 px-4 py-8 md:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <Plane className="size-8 text-primary" aria-hidden="true" />

            <h1 className="text-3xl font-bold md:text-4xl">FlightWatch</h1>
          </div>

          <p className="mt-2 text-base-content/70">
            Track European flights in GBP or EUR.
          </p>
        </header>

        <section className="card bg-base-100 shadow-sm">
          <div className="card-body gap-4 md:p-8">
            <span className="badge badge-outline">Example flight</span>

            <h2 className="card-title text-2xl">
              {departure} → {destination}
            </h2>

            <p>Target price: {formattedPrice}</p>
            <p>Tracking Status: {isTracking ? "Tracking" : "Not Tracking"}</p>
            <button
              onClick={handleTrackClick}
              type="button"
              className={`btn w-full md:w-fit ${isTracking ? "btn-success" : "btn-primary"}`}
            >
              <Bell className="size-4" aria-hidden="true" />
              Track this flight
            </button>
          </div>
        </section>
        {/* <FlightCard departure="London" destination="Paris"></FlightCard> */}

        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            departure={flight.departure}
            destination={flight.destination}
            targetPrice={flight.targetPrice}
            currency={flight.currency}
          ></FlightCard>
          
        ))}
        <FlightForm></FlightForm>
      </div>
    </main>
  );
}

export default App;
