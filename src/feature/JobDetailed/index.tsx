import React, {useEffect, useState} from 'react';
import JobDetailedContainer from "../../components/JobDetail";
import {useParams} from "react-router-dom";

interface IJobProps {
	data: any
}

const JobDetailed: React.FC<IJobProps> = ({data}) => {

	const params = useParams();

	const [job, setJob] = useState([[]]);
	const [isFiltering, setFiltering] = useState(true);

	useEffect(()=>{
		const findJob = async () => {
			await setJob(()=> {
				return data.filter((el:any) => {
					return el.job.id == params.id;
				})
			})
			setFiltering(false)
		}

		findJob()
	},[])

	return (
		<>
			<div className="h-full">
				{ isFiltering || <JobDetailedContainer data={job}/> }
			</div>
		</>

	);
};

export default JobDetailed;