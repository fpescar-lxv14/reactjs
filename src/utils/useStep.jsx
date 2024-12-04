import { useReducer } from "react"

export const initialState = { stage: 1 }
export const stateReducer = (state, action) => {
    switch(action.type){
        case "NEXT": return { stage: state.stage + 1 }
        case "PREV": return { stage: state.stage - 1 }
        case "GOTO": return { stage: action.payload }
        default:     return state
    }
}
export const useSteps = (initialStep, totalSteps) => {
    const [{stage}, dispatch] = useReducer(stateReducer, initialState)
    const nextStep = () => stage < totalSteps && dispatch({type:"NEXT"});
    const prevStep = () => stage > initialStep && dispatch({type:"PREV"})
    const goToStep = (step) => dispatch({type: "GOTO", payload: step})
    return { nextStep, prevStep, goToStep, stage }
}