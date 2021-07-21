import { useState, useEffect } from 'react';
import Header from './components/Header';
import Map from "./components/Map";
import Loader from './components/Loader';

/**
 * This application uses google-map-react templating NPM package and
 * NASA API to track and display all active volcanoes in the world.
 */
function App() {
  // Initialize states
  const [eventData, setEventData] = useState([]); // Consists of all event data from NASA API
  const [loading, setLoading] = useState(false); // Whether the site is in a loading (fetching data) state

  // Getting event data using fetchEvent() function
  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      const events = await fetchEvents();
      setEventData(events);
      setLoading(false);
    }

    getEvents();
  }, [])

  // Fetch event data from NASA API
  const fetchEvents = async () => {
    const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
    const { events } = await res.json();
    return events;
  }

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
