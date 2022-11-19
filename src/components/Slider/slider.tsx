import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

interface images {
	src: []
}

const Slider = (props: images) => {

	const mapImage = (src:any) => src.map((el:string)=>{
		return el;
	})

	return (
		<>
			<Carousel showThumbs={false} showStatus={false} emulateTouch={true} infiniteLoop={true}>
				{props.src.map((el:any) => {
					return (
						<div><img className="h-[10rem] object-center object-cover" src={el} alt="img"/></div>
					)
				})}
			</Carousel>
		</>
	);
};

export default Slider;
