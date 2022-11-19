export const salaryParse = (salary:string) => {
	return `€ ${salary.replaceAll('k',' 000')}`
}