import React, {useEffect, useState} from 'react';
import Rating from "../elements/Rating";
import {LocationIcon, RatingIcon} from "../../constans/icons";
import {addressParse} from "../../services/addressParse";
import {getGeo} from "../../api/geoAPI";

interface IJobsItem {
	title: string,
	address: string,
	createdAt: string,
	name: string
	pictures: (string)[],
	id: string,
	location: any,
	addressLine: string
}

const JobItem: React.FC<IJobsItem> = ({title,address,createdAt,name,pictures,id,location,addressLine}) => {


	return (
		<div key={id} className="
		container mx-auto max-w-2xl bg-[#EFF0F5] rounded-2xl drop-shadow-md cursor-pointer hover:drop-shadow-xl anim
		">
			<div className="grid grid-cols-[1fr_2fr] min-h-[10rem]">
				<div className="rounded-full flex items-center justify-center">
					<img
						className="rounded-full object-cover h-28 w-28 "
						src={`${pictures[0]}?random=${id}`}
						alt="image"
					/>
				</div>

				<div className="flex flex-col p-2 gap-2 justify-between">

					<div className="flex flex-row items-center justify-between">
						<span className="text-[#384564] text-sm inline-flex">
							<Rating/>
						</span>
						<div className="text-[#878D9D] text-[.8rem] font-small">{createdAt}</div>
					</div>

					<div className="flex flex-col gap-2">
						<h1 className="text-[#3A4562] text-1.1 job-text">{title}</h1>
					</div>

					<div className="flex flex-col gap-2">
						<p className="text-[#878D9D] text-1">{name}</p>
						<div className="inline-flex items-center gap-2 text-[#878D9D]">
							<LocationIcon/>
							<span className="text-1">{addressLine}</span>
						</div>
					</div>

				</div>
			</div>

		</div>
	);
};

export default JobItem;
