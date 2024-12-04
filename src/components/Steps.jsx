export const Steps = ({goToStep, total, stage}) =>
<div className="steps">
{ Array.from({length: total}).map((_, i) => {
    const step = i + 1
    return (
    <button key={i} className={step === stage ? "active" : ""} 
        onClick={() => goToStep(step)}>
        {step}
    </button> 
    )}
)}
</div>