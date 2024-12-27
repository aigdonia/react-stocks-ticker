import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getTickers } from "../services/stocks";
import { TickersList } from "../components/ticker-list";
import { toast } from "sonner";

export function ExplorePage() {

	const { data: tickers, isLoading, isError } = useQuery({
		queryKey: ["tickers"],
		queryFn: getTickers,
		throwOnError(error) {
			toast.error("Error While Fetching Tickers", {
				description: error.response.data.error
			})
		},
	});

	return (
		<TooltipProvider>
			<div className="flex items-center justify-center py-4 ">
				<input className="text-xl border border-sky-100 px-2 rounded-md w-full mx-3 md:w-[80%] lg:w-[50%]" placeholder="Search..." />
			</div>
			{isError && <div className="flex items-center justify-center h-[50vh]">
				<div>There was an error</div>
			</div>}
			{tickers && <TickersList tickers={tickers} />}
		</TooltipProvider>
	);
}
