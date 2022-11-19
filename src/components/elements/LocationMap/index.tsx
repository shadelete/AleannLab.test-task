import React, {useState} from 'react';
import maplibregl from "maplibre-gl";
import Map, {Marker} from "react-map-gl";
import {ImLocation} from "react-icons/im";

const LocationMapContainer = (props:any) => {

	const [settings, setsettings] = useState({
		dragPan: false,
		dragRotate: false,
		scrollZoom: false,
		touchZoom: false,
		touchRotate: false,
		keyboard: false,
		doubleClickZoom: false
	});


	const API:string = '944bf9bd9ad74202ad8c1df47fa680d4'

	const marker:string = 'type:material;color:%23ff3421;icontype:awesome'

	return (
		<Map mapLib={maplibregl}
			 {...settings}
			 initialViewState={{
				 longitude: props.location.long,
				 latitude: props.location.lat,
				 zoom: 1
			 }}
			 style={{width: "100%", height: "12rem"}}
			 mapStyle="https://api.maptiler.com/maps/557c5022-5995-4e3f-af27-60d89e4f60a9/style.json?key=dmmNs7CF7UELp0dTAauQ"
			 attributionControl={false}
		>
			<Marker longitude={props.location.long} latitude={props.location.lat} anchor="bottom">
				<span className="text-[2rem] text-[#D8D8D8]"><ImLocation/></span>
			</Marker>
		</Map>
	)
};

export default LocationMapContainer;
