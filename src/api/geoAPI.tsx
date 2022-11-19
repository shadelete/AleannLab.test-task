import axios from "axios";

const baseAPI = axios.create({
	baseURL: 'https://api.geoapify.com/v1/geocode/reverse?lat=36.10755887280281&lon=-81.87071095201492&lang=en&format=json&apiKey=944bf9bd9ad74202ad8c1df47fa680d4',
	data: {},
	headers: {
		'Content-Type'  : 'application/json'
	}
});

export const getGeo = {
	getAddress(long:number,lat:number)  {
		return baseAPI.get('')
			.then(response => response.data)
			.catch(res => console.error(res))
	}
}