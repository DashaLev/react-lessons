const initialState = {light_theme: false}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, light_theme:action.payload}
        default:
            return state
    }
}
