import { createContext, PropsWithChildren, useContext, useState } from "react";

const SearchContext = createContext({
	query: "",
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setQuery: (_str: string) => {},
});

export const SearchProvider = ({ children }: PropsWithChildren ) => {
	const [query, setQuery] = useState("");
	return (
		<SearchContext.Provider value={{ query, setQuery }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearch = () => {
	const context = useContext(SearchContext);

	if (!context) {
		throw new Error("useSearch must be used within a SearchProvider");
	}
	return context;
};
