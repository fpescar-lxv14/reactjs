export default function Card ({login, name, email, phone, cell, picture}){
    return(
        <article>
            <img src={picture.large} alt={login.uuid} />
            <h2>{name.title} {name.last} {name.first}</h2>
            <ul>
                <li><strong>correo:</strong> <a href={"mailto:"+email}>{email}</a></li>
                <li><strong>Telefono: </strong> <a href={"tel:"+phone}>{phone}</a></li>
                <li><strong>Celular: </strong> <a href={"tel:"+cell}>{cell}</a></li>
            </ul>
            <button>Rechazar</button>
            <button>Seleccionar</button>
            <button>Ver Perfil</button>
        </article>
)}