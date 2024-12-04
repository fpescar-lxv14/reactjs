import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = { user: undefined }
    }
    render() {
    return (
        <header>
            <h2>Estas en Casa</h2>
            <p>Bienvenido {this.state.user}</p>
        </header>
    )}
    componentDidMount(){
        setTimeout(
            () => this.setState({ user: "cristian" }),
            1000
        )}
    componentWillUnmount(){
        clearTimeout(
            setTimeout(
                () => this.setState({ user: "cristian" }),
            1000
        ))
    }
}