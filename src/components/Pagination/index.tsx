import React, {useEffect, useState} from 'react';
import {Link, NavLink, useParams} from "react-router-dom";
import {LeftIcon, RightIcon} from "../../constans/icons";

interface IData {
	dataLength: number
}

const PaginationContainer: React.FC<IData> = ({dataLength}) => {

	const pageNumber = Number(useParams().page)

	const [length, setlength] = useState<any>([]);

	useEffect(() => {
		setlength(lengthPagesArray(dataLength))
	}, [])


	const lengthPagesArray = (length: number) => {
		let n = []
		for (let i = 1; i <= (Math.floor(length / 5)); i++) {
			n.push(i)
		}
		return n;
	}

	return (
		<div className="container p-2 mx-auto max-w-fit">
			<div className="inline-flex items-center bg-white rounded-md">

				<div className="p-2">
					<Link to={`/${pageNumber >= 2 ? pageNumber - 1 : 1}`}>
						<span className="text-[#7D859C]">
							<LeftIcon/>
						</span>
					</Link>
				</div>

				<div className="px-[2.5rem] inline-flex gap-2 border-x-2 border-[#DEE3EF] font-bold m">
					{length.map((el: any, index: number) => {
						return (
							<span key={index} className="relative">
								<NavLink className="text-[#70778B]" to={`/${el}`}>{el}</NavLink>
							</span>
						)
					})}
				</div>

				<div className="p-2">
					<Link
						to={`/${pageNumber < dataLength / 5 && pageNumber !== 0 ? pageNumber + 1 : dataLength / 5}`}><span
						className="text-[#7D859C]">
						<RightIcon/>
					</span>
					</Link>
				</div>

			</div>
		</div>
	);
};

export default PaginationContainer;
