import React, {useEffect, useState} from 'react';
import JobDetailedContainer from "../../components/JobDetail";
import {getFullData} from "../../api/api";
import Preloader from "../../components/elements/Preloader";
import ErrorPage from "../../components/elements/Error";
import {useParams} from "react-router-dom";

const JobDetailed = () => {

	const params = useParams();

	const [job, setJob] = useState([[]]);
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [errorStatus, setErrorStatus] = useState({code: 0,message:''});

	useEffect(()=>{
		getFullData()
			.then((res) => {
				setJob(()=> {
					return res.filter((el:any) => {
						return el.job.id == params.id;
					})
				});
			})
			.catch((e)=> {
				setError(true)
				setErrorStatus({
					...errorStatus,
					code: e.response.status,
					message: e.response.data.error
				})
			})
			.finally(()=> setLoading(false))
	},[])

	return (
		<>
			<div className="h-full">
				{
					isLoading
						? 	<Preloader/>
						: 	isError
						?	<ErrorPage code={errorStatus.code} message={errorStatus.message}/>
						: 	<>
								<JobDetailedContainer data={job}/>
							</>
				}
			</div>
		</>

	);
};

export default JobDetailed;