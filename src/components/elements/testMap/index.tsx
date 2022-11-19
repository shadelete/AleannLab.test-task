import React, {useState} from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import maplibregl from 'maplibre-gl';

const TestMap = () => {

	const [settings, setsettings] = useState({
		dragPan: false,
		dragRotate: false,
		scrollZoom: false,
		touchZoom: false,
		touchRotate: false,
		keyboard: false,
		doubleClickZoom: false
	});

	return (
		<Map mapLib={maplibregl}
			 {...settings}
			 initialViewState={{
				 longitude: -77.038427,
				 latitude: 38.904553,
				 zoom: 13
			 }}
			 style={{width: "100%", height: " calc(100vh - 77px)"}}
			 mapStyle="https://api.maptiler.com/maps/557c5022-5995-4e3f-af27-60d89e4f60a9/style.json?key=dmmNs7CF7UELp0dTAauQ"
			 attributionControl={false}
		>
		</Map>
	);
};

export default TestMap;
