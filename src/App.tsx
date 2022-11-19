import React, {lazy,Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
const JobBoard = lazy(()=> import("./feature/JobsBoard"))
const JobDetailed = lazy(()=> import("./feature/JobDetailed"))

function App() {
  return (
    <>
		<Suspense>
			<Routes>
				<Route path="/" element={<Navigate to={"/1"}/>}/>
				<Route path="/:page" element={<JobBoard/>}/>
				<Route path="/job/:id" element={<JobDetailed/>}/>
			</Routes>
		</Suspense>
    </>
  );
}

export default App;
