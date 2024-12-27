import axios from "axios";

const API_TOKEN = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_API_URL;

const httpClient = axios.create({
		baseURL,
		timeout: 1000,
		headers: {'Authorization': `Bearer ${API_TOKEN}`}
	});

export default httpClient
