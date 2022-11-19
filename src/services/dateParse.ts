import moment from "moment/moment";

export const dateParse = (created:string) => {
	const parseCreatedDate = moment(created, 'YYYY-MM-DD').toDate();
	const different = Math.floor(moment().diff(parseCreatedDate,'years',true))
	return `Posted ${different} years ago`;
}