import React, { Component } from 'react';
import { createRoot }  from 'react-dom/client';

class App extends Component{
    render(){
        return (
            <>
                <header>
                    <h1>ReactJS + NodeJS</h1> 
                    <p>Bienvenido al Sitio</p>
                </header>
                <main>
                    <section>
                        <h2>Introduccion</h2>
                    </section>
                </main>
                <footer>
                    <p>Todos los derechos reservados</p>
                </footer>
            </>
        )
    }
}

createRoot(document.getElementById('root')).render(<App/>)