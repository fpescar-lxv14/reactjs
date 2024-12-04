export const Steps = ({goToStep, total}) =>
<div className="steps">
{ Array.from({length: total}).map((_, i) => 
    <button key={i} className={i + 1 === stage ? "active" : ""} 
        onClick={() => goToStep(i + 1)}>
        step
    </button> 
)}
</div>