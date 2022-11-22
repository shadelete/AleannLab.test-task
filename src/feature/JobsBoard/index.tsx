import React from 'react';
import PaginationContainer from "../../components/Pagination";
import JobItemContainer from "../../components/JobItem";


interface IJobProps {
	data: {}[]
}

const JobBoard: React.FC<IJobProps> = ({data}) => {
	return (
		<div className="container p-2 mx-auto max-w-basic flex flex-col gap-2 h-full">
			<JobItemContainer data={data}/>
			<PaginationContainer dataLength={data.length}/>
		</div>
	);
};

export default JobBoard;
