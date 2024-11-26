import { Component } from "react";
import Button from "./Button";

class Header extends Component {
    constructor(props){ 
        super(props)
        this.state = { reloads: 0 }
    }
    shouldComponentUpdate(){ // El Componente debe Actualizarse 
        return false
    }
    render(){ // El componente se Renderizo
        return(
        <header>
            <img className="logo" src={this.props.icon}/>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
            <Button text="me gusta" />
            <Button text="me encanta" />
            <Button text="me divierte" />
        </header>
    )}
    componentDidMount(){ // El Componente se Monto
        this.setState(prev => ({ reloads: prev.reloads + 1 }))
    }
    componentDidUpdate(){ // El Componente se Actualizo
        console.log(`Actualizado ${this.state.reloads} veces`);
    }
    componentWillUnmount(){ // El componente se va a Desmontar
        console.log("Se va a desmontar el componente")
    }
}
export default Header;