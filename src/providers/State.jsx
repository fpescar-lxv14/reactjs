import { createContext, useState } from "react";
import { urlQuery, defaultSearch } from "./search";

export const StateContext = createContext()
export const StateProvider = ({children}) => {
    const [search, setSearch] = useState(defaultSearch);
    const [results, setResults] = useState();
    const setParam = (k,v) => setSearch(prev =>({...prev,[k]:v}));
    const searchResults = async() => {
        try {
            const results = await fetch(urlQuery(search));
            const data = await results.json()
            setResults(data)
        } catch (err){ setResults(err) }}
    return(
    <StateContext.Provider value={{search, results, setParam, searchResults}}>
        {children}
    </StateContext.Provider>
)}