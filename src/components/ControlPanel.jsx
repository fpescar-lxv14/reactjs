export function ControlPanel (props) {
    const entries = Object.entries(props) ?? [];
    return (
    <ul className="control-panel">{ 
    entries?.map(([k,v],i) => typeof v !== "object" &&
        <li key={i}>
            <strong>{k}: </strong>{v ?? "-"}
        </li>
    )}
    </ul>
)}