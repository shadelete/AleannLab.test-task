import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

interface images {
	src: []
}

export const Slider = (props: images) => {

	return (
		<>
			<Carousel showThumbs={false} showStatus={false} emulateTouch={true} infiniteLoop={true}>
				{props.src.map((el:any,index) => {
					return (
						<div key={index}><img className="h-[10rem] object-center object-cover" src={`${el}?random=${index}`} alt="img"/></div>
					)
				})}
			</Carousel>
		</>
	);
};
