import axios from "axios";

const instance = axios.create({
	baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
	data: {},
	headers: {
		'Content-Type'  : 'application/json',
		'Authorization' : `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
	}
});

const instanceGEO = axios.create({
	baseURL: '',
	data: {},
	headers: {
		'Content-Type'  : 'application/json'
	}
});

export const getData = {
	getData() {
		return instance.get('')
			.then((res) => res.data)
	}
}

export const getGeo = {
	getAddress(location: Array<number>)  {
		return location.map((el:any)=>{
			return instanceGEO.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${el[0]}&lon=${el[1]}&lang=en&format=json&apiKey=944bf9bd9ad74202ad8c1df47fa680d4`)
				.then((res)=>{
					return new Array(res.data.results[0])
				})
		})
	}
}

export const getFullData = async () => {
	const baseData = await getData.getData();
	const geoData = await Promise.all(getGeo.getAddress(baseData.map((el:any)=>{
		return new Array(el.location.lat,el.location.long)
	})))
	const newBase:Array<any> = baseData.map((el:any,index:number)=>{
		return {job:el,geo:geoData[index][0]}
	})
	return newBase;

}



