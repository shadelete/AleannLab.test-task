import React from 'react';
import PaginationContainer from "../../components/Pagination";
import JobItemContainer from "../../components/JobItem";


interface IJobProps {
	data: any
}

const JobBoard: React.FC<IJobProps> = ({data}) => {
	return (
		<div className="container p-2 mx-auto max-w-2xl flex flex-col gap-2 h-full">
			<JobItemContainer data={data}/>
			<PaginationContainer/>
		</div>
	);
};

export default JobBoard;
