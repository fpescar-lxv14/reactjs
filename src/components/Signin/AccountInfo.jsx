export default AccountInfo = ({prevStep, nextStep}) =>
<div className="d-grid gap-2">
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