export const  Container = ({children}) =>
<section className="container py-5 p-3 position-relative">
    {children}
</section>

export const Form = ({children, action}) => 
<form className="container py-5 p-3 position-relative" onSubmit={(e) => {
    e.preventDefault()
    action && action(e)}}>
    { children }
</form>