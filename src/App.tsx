import React, {lazy, Suspense, useEffect, useState} from 'react';
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import {getFullData} from "./api/api";
import Preloader from "./components/elements/Preloader";
import ErrorPage from "./components/elements/Error";

const JobBoard = lazy(()=> import("./feature/JobsBoard"))
const JobDetailed = lazy(()=> import("./feature/JobDetailed"))

function App() {

	const pageNumber = Number(useParams().page)

	const [jobs, setJobs] = useState([{}]);
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [errorStatus, setErrorStatus] = useState({code: 0,message:'Unnamed Error'});

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
	},[pageNumber])

  return (
    <>
		<Suspense>
			{
				isLoading
					? 	<Preloader/>
					: 	isError
						?	<ErrorPage code={errorStatus.code} message={errorStatus.message}/>
						: 	<>
							<Routes>
								<Route path="/" element={<Navigate to={"/1"}/>}/>
								<Route path="/:page" element={<JobBoard data={jobs}/>}/>
								<Route path="/job/:id" element={<JobDetailed data={jobs}/>}/>
							</Routes>
						</>
			}
		</Suspense>
    </>
  );
}

export default App;
