const PayInfo = ({prevStep, nextStep}) =>
<div className="d-grid gap-2">
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
export default PayInfo;