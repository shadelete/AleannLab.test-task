import React from 'react';
import {Link, useParams} from "react-router-dom";
import {dateParse} from "../../services/dateParse";
import JobItem from "./JobItem";

const chunk = require('lodash.chunk')

interface IJobsItem {
	data: {}[]
}

const JobItemContainer: React.FC<IJobsItem> = ({data}) => {

	const params = Number(useParams().page)

	const listJobsOfPage = (list:any,page:number) => {
		let n = chunk(data,5)
		return n[page-1]
	}

	return (
		<>
			{listJobsOfPage(data,params || 1).map((el:any) => {
				return (
					<Link key={el.job.id} to={`/job/${el.job.id}`}>
						<JobItem
							title={el.job.title}
							address={el.job.address}
							createdAt={dateParse(el.job.createdAt)}
							name={el.job.name}
							pictures={el.job.pictures}
							id={el.job.id}
							addressLine={el.geo.address_line1 || el.geo.address_line2}
						/>
					</Link>
				)
			})}
		</>
	);
};

export default JobItemContainer;