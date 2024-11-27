export const Button = ({type, fn, text, icon}) => 
<button className={type} onClick={fn}>
    {icon} {text} {icon}
</button>