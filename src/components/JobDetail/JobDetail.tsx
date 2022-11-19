import React from 'react';
import {useNavigate} from "react-router-dom";
import {Slider} from "../../components/Slider/slider";
import {ImLocation} from "react-icons/im";
import LocationMap from "../elements/LocationMap";
import {BookmarkIcon, ButtonArrowIcon, ShareIcon} from "../../constans/icons";


interface IJobProps {
	address: string,
	benefits: [],
	createdAt: string,
	description:any,
	email: string,
	employment: [],
	id: string,
	location: [],
	name: string,
	phone: string,
	pictures: [],
	salary: string,
	title: string,
	addressName: string
}

const JobDetailed: React.FC<IJobProps> = ({address, benefits, createdAt,description,email,employment,id,location,name,phone,pictures,salary,title,addressName}) => {


	const navigate = useNavigate()

	return (
		<section className="bg-white pt-2 lg:pt-10 pb-5 lg:pb-20" key={id}>
			<div className="container mx-auto max-w-[1400px] p-2">
				<div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5">
					<div className="flex flex-col gap-2">
						<div className="flex flex-row justify-between items-center">

							<h1 className="text-[#3A4562] font-bold text-[1.5rem]">Job Details</h1>

							<div className="inline-flex items-center gap-5 text-[0.8rem] text-[#3A4562] font-normal">
								<span className="inline-flex items-center gap-1 cursor-pointer"><BookmarkIcon/> Save to my list</span>
								<span className="inline-flex items-center gap-1 cursor-pointer"><ShareIcon/> Share</span>
							</div>

						</div>

						<hr className="border-solid border-[100%] border-[#3A4562] opacity-[0.13]"/>

						<div className="flex flex-col text-[#3A4562]">
							<h1 className="text-[1.5rem] font-bold tracking-[-0.75px]">{title}</h1>
						</div>

						<div className="flex flex-row items-center justify-between">
							<div className="">
								<span className="text-[#38415D9A] text-[.8rem]">{createdAt}</span>
							</div>
							<div className="flex flex-col items-end">
								<span className="text-[#38415DD1] text-[1.1rem] tracking-[-0.6px]">Brutto, per year</span>
								<p className="text-[#3A4562] font-bold text-[1.2]">{salary}</p>
							</div>
						</div>

						<div className="flex flex-col text-[#38415DD1] gap-8">
							<div className="">
								<p>{description.mainDesc}</p>
							</div>

							<div className="">
								<h2 className="text-[#3A4562] font-bold text-[1.5rem] mb-8">Responsopilities</h2>

								{description.responsopilities.map((el:any,index:number)=> {
									return (
										<p key={index}>
											{el}
										</p>
									)
								})}
							</div>

							<div className="flex flex-col gap-2">
								<h2 className="text-[#3A4562] font-bold text-[1.5rem]">Compensation & Benefits:</h2>
								<p>Our physicians enjoy a wide range of benefits, including:</p>
								<ul className="flex flex-col list-[square] list-inside">

									{description.benefits.map((el:any,index:number)=>{
										return <li key={index} className="">{el}</li>
									})}
								</ul>
							</div>

							<button
								className="uppercase text-white bg-[#384564] w-max px-[1.5rem] py-[1rem] rounded-xl font-medium text-[0.8rem]"
							>
								apply now
							</button>

							<div className="">
								<h1 className="text-[#3A4562] font-bold text-[2rem]">Additional info</h1>

								<hr className="border-solid border-[100%] border-[#3A4562] opacity-[0.13]"/>

								<div className="flex flex-col gap-2">
									<span className="text-[rgba(56,65,93,0.82)]">Employment type</span>
									<div className="flex flex-row gap-2">
										{employment.map((el:string,index)=>{
											return (
												<span key={index} className="text-[#55699E] font-bold px-4 py-2 rounded-md border
																border-solid bg-[rgba(161,177,219,0.3)] border-[rgba(0,0,0,0.12)]">
														{el}
												</span>
											)
										})}
									</div>
								</div>

								<div className="flex flex-col gap-2">
									<span className="text-[rgba(56,65,93,0.82)]">Benefits</span>
									<div className="flex flex-row gap-2">
										{benefits.map((el:string,index)=>{
											return (
												<span key={index} className="text-[#FFCF00] font-bold px-4 py-2 rounded-md border
																border-solid bg-[#fff6cc] border-[#FFCF00]">
																{el}
															</span>
											)
										})}
									</div>
								</div>

							</div>

							<div className="">
								<h1 className="text-[#3A4562] font-bold text-[2rem]">Attached images</h1>
								<hr className="border-solid border-[100%] border-[#3A4562] opacity-[0.13]"/>
								<div className="pt-[1rem]">
									<div className="flex-row gap-5 hidden lg:flex">
										{pictures.map((el:string,index)=>{
											return (
												<div key={index}>
													<img src={`${el}?random=${index}`} alt="image"/>
												</div>
											)
										})}
									</div>
									<div className="lg:hidden">
										<Slider src={pictures}/>
									</div>
								</div>
							</div>

							<div>
								<button onClick={() => navigate(-1)} className="gap-5 uppercase inline-flex items-center justify-center text-[##3A4562] bg-[#E4E5EA] py-[1rem] px-[1.4rem] rounded-xl font-medium">
									<span className="text-[1.3rem]"><ButtonArrowIcon/></span>
									return to job board
								</button>
							</div>

						</div>

					</div>
					<div className="rounded-xl bg-[#2A3047] h-fit overflow-hidden">

						<div className="py-[1.8rem] px-[3rem] text-[#E8EBF3]">
							<ul className="flex flex-col gap-[0.5rem]">
								<h2 className="font-bold text-[1.1rem] text-[#E7EAF0]">{addressName}</h2>

								<span className="items-center box leading-4 font-normal">
									<ImLocation/>
									{address}
								</span>

								<span className="leading-4 font-normal text-[#D8D8D8]">
									<a href={`tel:${phone}`}>{phone}</a>
								</span>
								<span className="box leading-4 font-normal text-[#D8D8D8]">
									<a href={`mailto:${email}`}>{email}</a>
								</span>

							</ul>
						</div>

						<div className="relative">
							<LocationMap location={location}/>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
};

export default JobDetailed;
