export default function SplashPage() {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-4">
			<img src="./public/nasdaq.svg" alt="Nasdaq Logo" className="w-1/3 m-5"/>
			<div className="text-slate-800">
				A Lightweight nasdaq stocks ticker app
			</div>
			<div className="text-xl text-slate-700/60">Ahmed Gaber</div>
		</div>
	)
}
