import React from 'react';
import {Link, useParams} from "react-router-dom";
import {dateParse} from "../../services/dateParse";
import * as _ from "lodash"
import JobItem from "./JobItem";

interface IJobsItem {
	data: any
}

const JobItemContainer: React.FC<IJobsItem> = ({data}) => {

	const params = Number(useParams().page)

	const listJobsOfPage = (list:any,page:number) => {
		let n = _.chunk(data,5)
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
							location={[el.job.location.long,el.job.location.lat]}
							addressLine={el.geo.address_line1 || el.geo.address_line2}
						/>
					</Link>
				)
			})}
		</>
	);
};

export default JobItemContainer;