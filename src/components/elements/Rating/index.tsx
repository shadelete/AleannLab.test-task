import React from 'react';
import {RatingIcon} from "../../../constans/icons";

const Rating = () => {
	return (
		<>
			{(() => {
				let td = [];
				for (let i = 1; i <= 5; i++) {
					td.push(<RatingIcon key={i}/>);
				}
				return td;
			})()}
		</>
	);
};

export default Rating;
