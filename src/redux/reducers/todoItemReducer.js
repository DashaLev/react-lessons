let initialState = {}

export const todoItemReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TITLE':
            return {...state, title:action.payload}
        case 'ADD_DESCRIPTION':
            return {...state, description:action.payload}
        case 'CLEAR_ITEM':
            return {}
        default:
            return state
    }
}