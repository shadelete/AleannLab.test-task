import React from 'react';
import {rating} from "../../constants/consts";
import {ImLocation} from "react-icons/im";

interface jobsItem {
	title: string,
	address: string,
	createdAt: string,
	name: string
	pictures: string,
	rating: string
}

const JobItem = (props: jobsItem) => {
	return (
		<div className="
		container mx-auto max-w-2xl bg-[#EFF0F5] rounded-2xl drop-shadow-md cursor-pointer hover:drop-shadow-xl anim
		">

			<div className="grid grid-cols-[1fr_2fr]">
				<div className="rounded-full flex items-center justify-center">
					<img
						className="rounded-full object-cover h-28 w-28 "
						src={props.pictures}
						alt="image"
					/>
				</div>

				<div className="flex flex-col p-2 gap-2">

					<div className="flex flex-row items-center justify-between">
						<span className="text-[#384564] text-sm inline-flex">
							<img src={rating} alt=""/>
							<img src={rating} alt=""/>
							<img src={rating} alt=""/>
							<img src={rating} alt=""/>
							<img src={rating} alt=""/>
						</span>
						<div className="text-[#878D9D] text-[.8rem] font-small">posted</div>
					</div>

					<div className="flex flex-col gap-2">
						<h1 className="text-[#3A4562] text-1.1">{props.title}</h1>
						<p className="text-[#878D9D] text-1">{props.name}</p>
						<div className="inline-flex items-center gap-2 text-[#878D9D]">
							<span><ImLocation/></span>
							<span className="text-1">{props.address}</span>
						</div>
					</div>

				</div>
			</div>

		</div>
	);
};

export default JobItem;
