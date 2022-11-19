import React from 'react';
import JobDetail from "./JobDetail";
import {dateParse} from "../../services/dateParse";
import {parseDesc} from "../../services/parseDesc";
import {salaryParse} from "../../services/salaryParse";

interface IJobDetails {
	data: object[]
}

const JobDetailedContainer: React.FC<IJobDetails> = ({data}) => {
	return (
		<>
			{data.map((el:any) => {
				return (
					<JobDetail
						address={el.job.address}
						benefits={el.job.benefits}
						createdAt={dateParse(el.job.createdAt)}
						description={parseDesc(el.job.description)}
						email={el.job.email}
						employment={el.job.employment_type}
						id={el.job.id}
						location={el.job.location}
						name={el.job.name}
						phone={el.job.phone}
						pictures={el.job.pictures}
						salary={salaryParse(el.job.salary)}
						title={el.job.title}
						key={el.job.id}
						addressName={el.geo.address_line2 || el.geo.address_line1}
					/>
				)
			})}
		</>

	);
};

export default JobDetailedContainer;
