import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getTickers } from "../services/stocks";
import { TickersList } from "../components/ticker-list";

export function ExplorePage() {

	const { data: tickers, isLoading, isError } = useQuery({
		queryKey: ["tickers"],
		queryFn: getTickers
	});

	const restult = useInfiniteQuery({
		queryKey: ['tickers-scroll'],
		queryFn: getTickers,
		initialPageParam: 0,
		getNextPageParam: (lastPage) => lastPage.next_url
	});

	return (
		<TooltipProvider>
			<div className="flex items-center justify-center py-4 ">
				<input className="text-xl border border-sky-100 px-2 rounded-md w-full mx-3 md:w-[80%] lg:w-[50%]" placeholder="Search..." />
			</div>
			<TickersList tickers={tickers} />
		</TooltipProvider>
	);
}
