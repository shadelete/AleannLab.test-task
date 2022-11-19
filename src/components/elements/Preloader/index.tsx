import React from 'react';
import preloader from "../../../assets/img/preloader/preloader.svg";

const Preloader = () => {
	return (
		<div className="flex items-center justify-center h-full w-full">
			<img src={preloader} alt="preloader"/>
		</div>
	);
};

export default Preloader;
