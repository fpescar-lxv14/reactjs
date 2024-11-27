export const { 
    VITE_SEARCH:Search, 
    VITE_KEY:key, 
    VITE_SUGGEST:Suggest 
} = import.meta.env
export const defaultSearch = {
    q: "",
    limit: 20,
    offset: 0,
    rating: "g",
    lang: "es",
    bundle:"low_bandwidth",
}
export const urlQuery = ({q,limit,offset,rating,lang,bundle}) => 
    `${Search}api_key=${key}&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}&bundle=${bundle}`