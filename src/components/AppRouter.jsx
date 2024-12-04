import { Routes, Route } from "react-router";

export default function AppRouter({routes}){
    return(
    <Routes>
    { routes?.map(({paths, Element}) => paths?.map((p,idx) => 
        <Route key={idx} path={p} element={<Element/>}/>
    ))}
    </Routes>
)}