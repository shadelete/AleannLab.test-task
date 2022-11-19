import React, {useEffect, useState} from 'react';
import PaginationContainer from "../../components/Pagination";
import JobItemContainer from "../../components/JobItem";
import {getData, getFullData, getGeo} from "../../api/api";
import Preloader from "../../components/elements/Preloader";
import ErrorPage from "../../components/elements/Error";

const JobBoard = () => {

	const [jobs, setJobs] = useState([{}]);
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [errorStatus, setErrorStatus] = useState({code: 0,message:''});

	useEffect(() => {

		getFullData()
			.then((res)=> {
				setJobs(res)
			})
			.catch((e)=>{
				console.log(e)
				setError(true)
				setErrorStatus({
					...errorStatus,
					code: e.response.status,
					message: e.response.data.error
				})
			})
			.finally(()=>{
				setLoading(false)
			})

	},[])

	return (
		<div className="container p-2 mx-auto max-w-2xl flex flex-col gap-2 h-full">
			{
				isLoading
				? 	<Preloader/>
				: 	isError
				?	<ErrorPage code={errorStatus.code} message={errorStatus.message}/>
				: 	<>
						<JobItemContainer data={jobs}/>
						<PaginationContainer/>
					</>
			}
		</div>
	);
};

export default JobBoard;
