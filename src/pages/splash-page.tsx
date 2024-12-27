import NasdaqLogo from "../components/nasdaq-icon"

export default function SplashPage() {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-4">
			<NasdaqLogo width={155} height={44} />
			<div className="text-slate-800">
				A Lightweight nasdaq stocks ticker app
			</div>
			<div className="text-xl text-slate-700/60">Ahmed Gaber</div>
		</div>
	)
}
