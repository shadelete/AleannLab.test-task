import React from 'react';

interface IErrorProps {
	code: number,
	message: string
}

const ErrorPage: React.FC<IErrorProps> = ({code,message}) => {
	return (
		<div className="flex flex-col items-center justify-center h-full w-full text-[2rem]">
			<div>ERR😕R</div>
			<div className="text-[#ff3800] font-bold">{code}</div>
			<div className="text-gray-500">{message}</div>
		</div>
	);
};

export default ErrorPage;
