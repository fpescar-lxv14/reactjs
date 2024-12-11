import { useProfile } from "../utils/useProfile"

export default function Profile() {
    const {path, profile} = useProfile()
    const renderProfile = (obj) => Object.entries(obj).map(([k,v],i) => 
        <li key={i}>
            <strong>{k}: </strong> 
            { typeof v === "object" ? <ul>{ renderProfile(v) }</ul> : v }
        </li>
    )
    const back = () => history.back()
    return ( profile &&
    <article>
        <img src={profile.picture.large} alt={profile.login.uuid} />
        <ul>
            {renderProfile(profile) }
        </ul>
        <button onClick={back}>Volver a {path}</button>
    </article>
)}