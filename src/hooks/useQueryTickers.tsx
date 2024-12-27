import { useQuery } from "@tanstack/react-query";
import { getTickers } from "../services/stocks";

export function useQueryTickers(searchTicker = "") {
	return useQuery({
		queryKey: ["tickers", searchTicker],
		queryFn: () => getTickers(searchTicker),
		enabled: !!searchTicker || searchTicker === "", // Prevent unnecessary fetch
	});
}
