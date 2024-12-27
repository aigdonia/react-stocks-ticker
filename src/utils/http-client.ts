import axios from "axios";

const API_TOKEN = 'kXZveXLl7W4xwmkpiQmmpaA3pBsDtjRy'; //TODO: fetch from config

const httpClient = axios.create({
		baseURL: 'https://api.polygon.io/v3/',
		timeout: 1000,
		headers: {'Authorization': `Bearer ${API_TOKEN}`}
	});

// httpClient.interceptors.response.use(
// 	(response) => response,
// 	async (error) => {
// 		return Promise.reject(error);
// 	}
// )
export default httpClient
