import Link from "./Link"
function Nav({links,title}){
    return(
        <nav>
            <a href="#">{title}</a>
            <button>&equiv;</button>
            <ul>{ 
                links?.map((item,i) => 
                <Link key={i} target="_self" {...item}/>
            )}
            </ul>
        </nav>
)}
export default Nav