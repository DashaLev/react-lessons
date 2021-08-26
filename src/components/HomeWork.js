import {useReducer} from "react";

const reduce = (state, action) => {
    switch (action.type) {
        case 'INCREASE_10':
            return state + 10
        case 'DECREASE_2':
            return state - 2
        default:
            return state
    }

}


export default function HomeWork() {

    let [state,dispatch] = useReducer(reduce, 0)

    return (
        <div>
            <h1>State: {state}</h1>
            <button onClick={()=> dispatch({type: 'INCREASE_10'})}>Increase in 10</button>
            <button onClick={()=> dispatch({type: 'DECREASE_2'})}>Decrease in 2</button>
            <hr/>
        </div>
    );
}

