import httpClient from "../utils/http-client";
// import { cache_database } from "./cache";

export type Ticker = {
	ticker: string;
	name: string;
	active: boolean;
	market: string;
}

const PAGE_SIZE = 100;

export async function getTickers(searchTicker=""): Promise<Ticker[]> {
	const response = await httpClient.get('/reference/tickers', {
		params: {
			ticker: searchTicker,
			market: 'stocks',
			limit: PAGE_SIZE,
			active: true,
			sort: 'ticker',
		}
	});

	return response.data.results;
}

