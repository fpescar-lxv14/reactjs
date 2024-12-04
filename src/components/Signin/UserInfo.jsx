const UserInfo = ({prevStep, nextStep}) => 
<div className="d-grid gap-2">
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
export default UserInfo;