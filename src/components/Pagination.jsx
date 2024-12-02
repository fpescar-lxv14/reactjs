import { useContext } from "react"
import { StateContext } from "../providers/State"
import Button from "./Button"

export default function Pagination() {
    const { results:{ pagination }, setParam, search } = useContext(StateContext)
    const {limit:l, offset:o} = search
    const { total_count, count, offset} = pagination;
    const total_pages = Number(Math.ceil(total_count / count))
    const current_page = Number((offset / count) + 1)

    const prevPage = () => setParam('offset', o-count)
    const nextPage = () => setParam('offset', o+count)
return (
    <ul className="pagination">
        <li><Button onClick={prevPage} disabled={offset <= 0} text="<" /></li>
        <li><strong>Resultados: </strong>{total_count}</li>
        <li><strong>Paginas: </strong>{total_pages}</li>
        <li><strong>Pagina actual: </strong>{current_page}</li>
        <li><Button onClick={nextPage} disabled={current_page >= total_pages} text=">" /></li>
    </ul>
    
)}