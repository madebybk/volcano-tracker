import { useState } from 'react';
import GoogleMapReact from "google-map-react";
import VolcanoLocations from "./VolcanoLocations";
import VolcanoInfoBox from './VolcanoInfoBox';

require('dotenv').config() // dotenv NPM module to set up environment variables
const { REACT_APP_MAP_API_KEY } = process.env;
const VOLCANO_EVENT = 12; // Volcano ID from NASA API

/**
 * Map component takes in eventData from NASA API and displays active
 * volcano events on Google Maps template from google-map-react NPM module.
 */
const Map = ({ center, zoom, eventData }) => {
    const [volcanoInfo, setVolcanoInfo] = useState(null); // Info including ID, Title, and Source of each volcano
    // Loop through each event and collects event coordinates of volcanoes
    const volcanoMarkers = eventData.map((ev) => {
        let volcanoID = ev.categories[0].id; // API ID
        if (volcanoID === VOLCANO_EVENT) {
            if (typeof (ev.geometries[0].coordinates[0]) !== 'number') return null; // If there are multiple coordinates
            return <VolcanoLocations lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setVolcanoInfo({ id: ev.id, title: ev.title, sources: ev.sources[0] })} />
        }
        return null;
    })

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }} // Personal Google Maps Javascript license
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={() => setVolcanoInfo(null)}
            >
                {volcanoMarkers}
                {volcanoInfo && <VolcanoInfoBox volcanoInfo={volcanoInfo} />}

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 37.5665,
        lng: 126.9780
    },
    zoom: 6
}

export default Map
