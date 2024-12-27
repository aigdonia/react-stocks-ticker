import { Toaster } from 'sonner';
import { ExplorePage } from "./pages/explore-page"
import { SearchProvider } from "./hooks/useSearch"
import SplashPage from './pages/splash-page';
import { useEffect, useState } from 'react';

function App() {
	const [appLoading, setAppLoading] = useState(true)

	// Simulate app loading
	useEffect(() => {
		const timeoutHandler = setTimeout(() => {

			setAppLoading(false)
		}, 1000)

		return () => clearTimeout(timeoutHandler)
	}, [])

	return (
		<SearchProvider>
			<Toaster />
			{appLoading && <SplashPage />}
			{!appLoading && <ExplorePage />}
		</SearchProvider>
	)
}

export default App
