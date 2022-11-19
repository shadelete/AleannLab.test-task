import React from 'react';
import {preloader} from "../../../constants/consts";

const Preloader = () => {
	return (
		<div className="flex items-center justify-center h-full w-full">
			<img src={preloader} alt="preloader"/>
		</div>
	);
};

export default Preloader;
