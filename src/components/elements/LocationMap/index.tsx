import React, {useState} from 'react';
import maplibregl from "maplibre-gl";
import Map, {Marker} from "react-map-gl";
import {LocationIcon} from "../../../constans/icons";

interface ILocationMapContainer {
	location: { lat:number, long:number }
}

const LocationMapContainer: React.FC<ILocationMapContainer> = ({location}) => {

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
				 longitude: location.long,
				 latitude: location.lat,
				 zoom: 1
			 }}
			 style={{width: "100%", height: "12rem"}}
			 mapStyle="https://api.maptiler.com/maps/557c5022-5995-4e3f-af27-60d89e4f60a9/style.json?key=dmmNs7CF7UELp0dTAauQ"
			 attributionControl={false}
		>
			<Marker longitude={location.long} latitude={location.lat} anchor="bottom">
				<span className="text-[2rem] text-[#D8D8D8]"><LocationIcon/></span>
			</Marker>
		</Map>
	)
};

export default LocationMapContainer;
