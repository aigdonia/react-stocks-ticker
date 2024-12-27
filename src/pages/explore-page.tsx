import { TooltipProvider } from "@radix-ui/react-tooltip";
import { getTickers } from "../services/stocks";
import { TickersList } from "../components/ticker-list";
import { useQuery } from "@tanstack/react-query";
import { SearchInput } from "../components/search-input";
import { useSearch } from "../hooks/useSearch";

function useQueryTickers(searchTicker = "") {
	return useQuery({
		queryKey: ["tickers", searchTicker],
		queryFn: () => getTickers(searchTicker),
		enabled: !!searchTicker || searchTicker === "", // Prevent unnecessary fetch
	});
}

export function ExplorePage() {
	const { query } = useSearch();
	const { data: tickers, isLoading, isError } = useQueryTickers(query)


	return (
		<>
			<SearchInput />
			<TooltipProvider>
				{isLoading && <div className="flex flex-col items-center justify-center h-[50vh]">
					<div>Loading Markets Data ...</div>
				</div>}
				{isError && <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
					<div className="text-xl font-bold text-red-700">Ouch!</div>
					<div>There was an error while fetching markets data</div>
					<a onClick={() => window.location.reload()} className="border border-spacing-1 text-sm px-2 py-1 rounded-md cursor-pointer">Refresh Page</a>
				</div>}
				{tickers && tickers.length <= 0 && <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
					<div className="text-xl font-bold text-red-700">Ouch!</div>
					<div>We couldn't find any tickers matching your search for <b>{query}</b></div>
				</div>}
				{tickers && tickers.length && <TickersList tickers={tickers} />}
			</TooltipProvider>
		</>
	);
}
