import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { toast } from 'sonner'
import { AxiosError } from 'axios'

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error: Error | AxiosError) => {
			console.error("Handled Error from Query Cache", error)

			// going hacky with typescript
			if (error instanceof AxiosError && error.response) {
				toast.error("Error While Fetching Data", {
					description: error.response.data.error
				})
			} else {
				toast.error('Something odd happening', {
					description: 'There were some unexpected errors happened that stopping the experience'
				})
			}
		}
	}),
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutes
			// cacheTime: 1000 * 60 * 30, // 30 minutes
			refetchOnWindowFocus: false,
		},
	},
})

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>

)
