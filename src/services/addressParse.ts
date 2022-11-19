import {getGeo} from "../api/geoAPI";

export const addressParse = (long:number,lat:number) => {
	return getGeo.getAddress(long,lat)
		.then(res=>{
			return res.results.map((el:any)=>{
				return new Array(el.country,el.county)
			})
		})
		.catch(error=>console.error(error))
}

addressParse(45,74).then((res)=> console.log(res))