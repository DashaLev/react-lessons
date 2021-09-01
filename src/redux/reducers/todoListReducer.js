let initialState = {todoList: [],editItem:null}

export const todoListReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            return {...state, todoList:[...state.todoList, {...action.payload, id:Math.random().toString(36).substr(2, 9), completed: false}]}
        case 'DELETE_TODO_ITEM':
            return {...state, todoList:[...state.todoList.filter(value => (value.id !== action.payload))]}
        case 'UPDATE_TODO':
            return {...state,todoList:[...state.todoList.map(value => {
                        if (value.id === action.payload.id) {
                            return {
                                ...value,
                                title: action.payload.title,
                                description: action.payload.description
                            }
                        } else {
                            return value
                        }
                   })
                ]}

        default:
            return state
    }
}