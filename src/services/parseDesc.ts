export const parseDesc = (desc:string) => {

	const descToArray = desc.split(/\r?\n/).filter((el:string) => el && el !== '  ');

	const description = {
		mainDesc: descToArray[0],
		responsopilities: descToArray[2].split('.').filter((el:string) => el && el !== '  ').map((el:any) => {
			return new Array(el.trim())
		}),
		benefits: descToArray[4].split('.').filter((el:string) => el && el !== '  ').map((el:any) => {
			return new Array(el.trim())
		})
	}

	return description;
}