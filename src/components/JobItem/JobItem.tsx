import React from 'react';
import Rating from "../elements/Rating";
import {BookmarkIcon, LocationIcon} from "../../constans/icons";

interface IJobsItem {
	title: string,
	address: string,
	createdAt: string,
	name: string
	pictures: (string)[],
	id: string,
	addressLine: string
}

const JobItem: React.FC<IJobsItem> = ({title,address,createdAt,name,pictures,id,addressLine}) => {


	return (
		<div key={id} className="
		container mx-auto max-w-basic bg-[#EFF0F5] rounded-2xl drop-shadow-md cursor-pointer hover:drop-shadow-xl anim
		">
			<div className="grid grid-cols-[1fr_2fr] max-h-[12rem] lg:flex">

				<div className="rounded-full flex items-center justify-center px-4 grid-span-1 lg:basis-1/12 lg:min-w-[7rem]">
					<img
						className="rounded-full object-cover h-20 w-20 "
						src={`${pictures[0]}?random=${id}`}
						alt="image"
					/>
				</div>

				<div className="flex flex-col p-4 gap-4 lg:basis-full lg:flex-row">
					<div className="flex flex-row justify-between lg:order-2 lg:basis-4/12">

						<div className="flex flex-row items-center justify-between col-auto max-h-4 min-h-full lg:order-1">
							<span className="text-[#384564] text-[1.5rem] inline-flex">
								<Rating/>
							</span>
						</div>

						<div className="flex lg:order-2 lg:flex-col lg:justify-between items-end">
							<div className="text-[#878D9D] text-[.8rem] font-small col-start-2 col-end-5 text-end grid items-center max-h-4 lg:order-3">
								<p>{createdAt}</p>
							</div>

							<div className="hidden lg:block lg:order-2">
								<BookmarkIcon/>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-between col-span-full lg:order-1 lg:basis-8/12">
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

		</div>
	);
};

export default JobItem;
