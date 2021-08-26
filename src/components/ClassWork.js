import {useReducer} from "react";

const reduce = (state, action) => {
    if (action.obj === 'a' && action.effect === 'INCREASE') {
        return {...state, a: state.a++}
    } else if (action.obj === 'a' && action.effect === 'DECREASE') {
        return {...state, a: state.a--}
    } else if (action.obj === 'b' && action.effect === 'INCREASE') {
        return {...state, b: state.b++}
    } else if (action.obj === 'b' && action.effect === 'DECREASE') {
        return {...state, b: state.b--}
    } else if (action.obj === 'c' && action.effect === 'INCREASE') {
        return {...state, c: state.c++}
    } else if (action.obj === 'c' && action.effect === 'DECREASE') {
        return {...state, c: state.c--}
    }
    return {...state};

}


export default function ClassWork() {

    let [{a,b,c},dispatch] = useReducer(reduce, {a:0,b:0,c:0})

    return (
        <div>
            <h2>State A: {a}</h2>
            <button onClick={()=> dispatch({obj:'a',effect: 'INCREASE'})}>Increase</button>
            <button onClick={()=> dispatch({obj:'a',effect: 'DECREASE'})}>Decrease</button>
            <h2>State B: {b}</h2>
            <button onClick={()=> dispatch({obj:'b',effect: 'INCREASE'})}>Increase</button>
            <button onClick={()=> dispatch({obj:'b',effect: 'DECREASE'})}>Decrease</button>
            <h2>State C: {c}</h2>
            <button onClick={()=> dispatch({obj:'c',effect: 'INCREASE'})}>Increase</button>
            <button onClick={()=> dispatch({obj:'c',effect: 'DECREASE'})}>Decrease</button>
        </div>
    );
}

