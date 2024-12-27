import { Ticker } from "../services/stocks"
import { DetailsIcon } from "./details-icon"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

export function TickersList({ tickers }: { tickers?: Ticker[] }) {
	return (
		<div id="tickers-list" className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-2">
			{tickers && tickers.map(ticker => (
				<TickerBox key={ticker.ticker} ticker={ticker} />
			))}
		</div>
	)
}

export function TickerBox({ ticker }: { ticker: Ticker }) {
	return (<div className="w-full sm:w-[45%] md:w-[210px] h-[100px] mx-3 md:mx-0 bg-slate-300/30 rounded-md flex items-center gap-x-1 px-2 py-2">
		<div className="text-2xl">{ticker.ticker}</div>
		<Tooltip key={ticker.ticker}>
			<TooltipTrigger asChild>
				<div className="w-4 h-4 pl-2"><DetailsIcon /></div>
			</TooltipTrigger>
			<TooltipContent>
				<p>{ticker.name}</p>
			</TooltipContent>
		</Tooltip>
	</div>)

}
