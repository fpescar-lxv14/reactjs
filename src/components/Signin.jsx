import { useState } from "react"

export default function Signin() {
    const [stage, setStage] = useState(1);
    const nextStep = () => setStage((n) => n < 3 ? n + 1 : n);
    const prevStep = () => setStage((n) => n > 1 ? n - 1 : n)
    return (
    <section className="container py-5 p-3 position-relative">
        <div className="steps">
            <button className={ stage === 1 && "active" } onClick={(e) => setStage(Number(e.target.innerText))}>1</button>
            <button className={ stage === 2 && "active" } onClick={(e) => setStage(Number(e.target.innerText))}>2</button>
            <button className={ stage === 3 && "active" } onClick={(e) => setStage(Number(e.target.innerText))}>3</button>
        </div>
        <h2>Registrate, ¡¡es Gratis!!</h2>
        <div className={stage === 1 ? "d-grid gap-2" : "d-none"}>
            <h3>Etapa 1: Datos de la Cuenta </h3>
            <fieldset className="form-floating">
                <input className="form-control" 
                    id="username" 
                    type="text"
                    placeholder="..." />
                <label htmlFor="username">Usuario</label>
            </fieldset>
            <fieldset className="form-floating">
                <input className="form-control" 
                    id="email" 
                    type="email"
                    placeholder="..." />
                <label htmlFor="email">Email</label>
            </fieldset>
            <fieldset className="form-floating">
                <input className="form-control" 
                    id="password" 
                    type="password"
                    placeholder="..." 
                    autoComplete="true"/>
                <label htmlFor="password">Escriba una Contraseña</label>
            </fieldset>
            <fieldset className="form-floating">
                <input className="form-control" 
                    id="repeatPass" 
                    type="password"
                    placeholder="..." 
                    autoComplete="true"/>
                <label htmlFor="repeatPass">Repita la Contraseña</label>
            </fieldset>
            <button 
                className="btn btn-primary"
                onClick={nextStep}>
                Siguiente
            </button>
        </div>
        <div className={stage === 2 ? "d-grid gap-2" : "d-none"}>
            <h3>Etapa 2: Datos Personales </h3>
            <fieldset className="d-flex gap-2">
                <div className="form-floating col">
                    <input className="form-control" 
                        id="firstName" 
                        type="text" 
                        placeholder="..."/>
                    <label htmlFor="firstName">Nombre/s</label>
                </div>
                <div className="form-floating col-6">
                    <input className="form-control" 
                        id="lastName" 
                        type="text" 
                        placeholder="..."/>
                    <label htmlFor="lastName">Apellido/s</label>
                </div>
            </fieldset>
            <fieldset className="form-floating">
                <input className="form-control" 
                    id="birthDate"
                    type="date"
                    placeholder="..."/>
                <label htmlFor="birthDate">Fecha de Nacimiento</label>
            </fieldset>
            <fieldset className="d-flex gap-2">
                <select className="form-select col">
                    <option value="54">Argentina (+54)</option>
                    <option value="55">Brasil (+55)</option>
                    <option value="56">Chile (+56)</option>
                </select>
                <div className="form-floating col-8">
                    <input className="form-control" 
                        id="phone" 
                        type="tel" 
                        placeholder="..."/>
                    <label htmlFor="phone">Telefono</label>
                </div>
            </fieldset>
            <fieldset className="d-flex gap-2">
                <div className="form-floating col">
                    <input className="form-control" 
                        id="address" 
                        type="text" 
                        placeholder="..."/>
                    <label htmlFor="address">Direccion</label>
                </div>
                <div className="form-floating col-4">
                    <input className="form-control" 
                        id="locality" 
                        type="text" 
                        placeholder="..."/>
                    <label htmlFor="locality">Localidad</label>
                </div>
            </fieldset>
            <button onClick={prevStep} className="btn btn-secondary">Anterior</button>
            <button onClick={nextStep} className="btn btn-primary">Siguiente</button>
        </div>
        <div className={stage === 3 ? "d-grid gap-2" : "d-none"}>
            <h3>Etapa 3: Datos de Facturacion</h3>
            <fieldset className="d-flex gap-2">
                <div className="form-floating col">
                    <input className="form-control" 
                        id="cardHolder" 
                        type="text" 
                        placeholder="..."/>
                    <label htmlFor="cardHolder">Titular</label>
                </div>
                <div className="form-floating col">
                    <input className="form-control" 
                        id="document" 
                        type="tel" 
                        placeholder="..."/>
                    <label htmlFor="document">Documento</label>
                </div>
            </fieldset>
            <fieldset className="d-flex gap-2">
                <div className="form-floating col">
                    <input className="form-control" 
                        id="creditCard" 
                        type="text" 
                        placeholder="..."/>
                    <label htmlFor="creditCard">Numero de Tarjeta</label>
                </div>
                <div className="form-floating col-4">
                    <input className="form-control" 
                        id="expire" 
                        type="month" 
                        placeholder="..."/>
                    <label htmlFor="expire">Vencimiento</label>
                </div>
                <div className="form-floating col-3">
                    <input className="form-control" 
                        id="code" 
                        type="text" 
                        placeholder="..."/>
                    <label htmlFor="code">Codigo</label>
                </div>
            </fieldset>
            <fieldset className="form-check form-switch">
                <input className="form-check-input" id="notifications" type="checkbox" />
                <label className="form-check-label" htmlFor="notifications">Deseo recibir notificaciones</label>
            </fieldset>
            <fieldset className="form-check form-switch">
                <input className="form-check-input" id="newsletter" type="checkbox" />
                <label className="form-check-label" htmlFor="newsletter">Quiero suscribirme al newsletter</label>
            </fieldset>
            <p>
                Muchas gracias por registrarte, te enviaremos un mail para confirmar la informacion recibida
            </p>
            <button onClick={prevStep} className="btn btn-secondary">Anterior</button>
            <button className="btn btn-success">Finalizar</button>
        </div>
    </section>
)}
