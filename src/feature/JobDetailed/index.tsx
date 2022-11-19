import React, {useEffect, useState} from 'react';
import {BsBookmark, BsFillShareFill} from "react-icons/bs";
import {useNavigate, useParams} from "react-router-dom";
import {getData} from "../../api/api";
import moment from "moment";
import Slider from "../../Components/elements/slider";
import GoogleMap from "../../Components/elements/googlemap";


// interface jobProps {
// 	address: string,
// 	benefits: [],
// 	createdAt: string,
// 	description: string,
// 	email: string,
// 	employment: [],
// 	id: string,
// 	location: [],
// 	name: string,
// 	phone: string,
// 	pictures: [],
// 	salary: string,
// 	title: string
// }

const JobDetailed = (props:any) => {

	const params = useParams();
	const navigate = useNavigate()

	const [job, setJob] = useState<any>([]);

	useEffect(()=>{
		getData.getJobs().then((res) => {
			setJob(()=> {
				return res.filter((el:any) => {
					return el.id == params.id;
				})
			})
		})
	},[])

	const salaryParse = (salary:string) => {
		return `€ ${salary.replaceAll('k',' 000')}`
	}

	const dateParse = (created:string) => {
		const parseCreatedDate = moment(created, 'YYYY-MM-DD').toDate();
		const different = Math.floor(moment().diff(parseCreatedDate,'days',true))
		return `Posted ${different} days ago`;
	}

	return (
		<>
			{job.map((el:any) => {
				return (
					<section className="bg-white">
						{/*<button onClick={() => navigate(-1)}>go back</button>*/}
						<div className="container container mx-auto max-w-3xl p-2">
							<div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5">
								<div className="flex flex-col gap-2">
									<div className="flex flex-row justify-between items-center">

										<h1 className="text-[#3A4562] font-bold text-[1.5rem]">Job Details</h1>

										<div className="inline-flex items-center gap-5 text-[0.8rem] text-[#3A4562] font-normal">
											<span className="inline-flex items-center gap-1"><BsBookmark/> Save to my list</span>
											<span className="inline-flex items-center gap-1"><BsFillShareFill/> Share</span>
										</div>

									</div>

									<hr className="border-solid border-[100%] border-[#3A4562] opacity-[0.13]"/>

									<div className="flex flex-col text-[#3A4562]">
										<h1 className="text-[1.5rem] font-bold tracking-[-0.75px]">{el.title}</h1>
									</div>

									<div className="flex flex-row items-center justify-between">
										<div className="">
											<span className="text-[#38415D9A] text-[.8rem]">{dateParse(el.createdAt)}</span>
										</div>
										<div className="flex flex-col items-end">
											<span className="text-[#38415DD1] text-[1.1rem] tracking-[-0.6px]">Brutto, per year</span>
											<p className="text-[#3A4562] font-bold text-[1.2]">{salaryParse(el.salary)}</p>
										</div>
									</div>

									<div className="flex flex-col text-[#38415DD1] gap-8">
										<p>{el.description}</p>

										<h2 className="text-[#3A4562] font-bold text-[1.5rem]">Responsopilities</h2>

										<p>
											Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
											<br/>
											The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.
											<br/>
											Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
										</p>

										<div className="flex flex-col gap-2">
											<h2 className="text-[#3A4562] font-bold text-[1.5rem]">Compensation & Benefits:</h2>
											<p>Our physicians enjoy a wide range of benefits, including:</p>
											<ul className="flex flex-col list-[square] list-inside">
												<li className="">Very competitive compensation package with bonuses</li>
												<li className="">Medical, Dental, and Vision Insurance</li>
												<li className="">Occurrence-based Malpractice Coverage</li>
												<li className="">Short-term and Long-term Disability Insurance and life insurance</li>
											</ul>
										</div>

										<button
											className="uppercase text-white bg-[#384564] w-max mx-auto px-[1.5rem] py-[1rem] rounded-xl font-medium text-[0.8rem]"
										>
											apply now
										</button>

										<div className="">
											<h1 className="text-[#3A4562] font-bold text-[2rem]">Additional info</h1>

											<hr className="border-solid border-[100%] border-[#3A4562] opacity-[0.13]"/>

											<div className="flex flex-col gap-2">
												<span className="text-[rgba(56,65,93,0.82)]">Employment type</span>
												<div className="flex flex-row gap-2">
													{el.employment_type.map((el:string)=>{
														return (
															<span
																className="text-[#55699E] font-bold px-4 py-2 rounded-md border
																border-solid bg-[rgba(161,177,219,0.3)] border-[rgba(0,0,0,0.12)]"
															>
																{el}
															</span>
														)
													})}

												</div>
											</div>

											<div className="flex flex-col gap-2">
												<span className="text-[rgba(56,65,93,0.82)]">Benefits</span>
												<div className="flex flex-row gap-2">
													{el.benefits.map((el:string)=>{
														return (
															<span className="text-[#FFCF00] font-bold px-4 py-2 rounded-md border
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
											<div className="">
												<Slider src={el.pictures}/>
											</div>
										</div>

									</div>

								</div>
								<div className="location">
									<GoogleMap/>
								</div>
							</div>
						</div>
					</section>
				)
			})}
		</>

	);
};

export default JobDetailed;
