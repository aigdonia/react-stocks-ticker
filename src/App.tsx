import { Toaster } from 'sonner';
import { ExplorePage } from "./pages/explore-page"
import { SearchProvider } from "./hooks/useSearch"

function App() {
	return (
		<SearchProvider>
			<Toaster />
			<ExplorePage />
		</SearchProvider>
	)
}

export default App
