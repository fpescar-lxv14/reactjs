import { Component } from "react";

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            reloads: 1,
        }
    }
    // componentWillMount(){
    //     console.log("se esta por montar el componente");
    // }
    // componentWillUpdate(){
    //     console.log("el componente va a recibir actualizaciones")
    // }
    render(){
        console.log("el componente ha sido creado")
    return(
        <header>
            <img 
                src={this.props.icon} 
                alt="Icono de aplicacion"/>
            {console.log("estoy al dia")}
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
        </header>
    )}
    componentDidMount(){
        console.log("Ya se creo el Componente")
    }
    componentWillUnmount(){
        console.log("Se esta por eliminar el componente")
    }
}

export default Header;