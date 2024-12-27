import { useEffect, useState } from "react";
import { useSearch } from "../hooks/useSearch";

export function SearchInput() {
	const { query, setQuery } = useSearch();
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const handler = setTimeout(() => {
			setQuery(searchQuery);
		}, 300);
		return () => clearTimeout(handler);
	}, [searchQuery, setQuery, query])

	return (
		<div className="flex items-center justify-center py-4 ">
			<input
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className="text-xl border border-sky-100 px-2 rounded-md w-full mx-3 md:w-[80%] lg:w-[50%]"
				placeholder="Search..." />
		</div>
	)
}
