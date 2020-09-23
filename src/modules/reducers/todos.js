const initialState = {
    items: [
        {id: 1, firstName: 'Inna', lastName: 'Irchina', phone: '0895445121', gender: true, age: 18},
        {id: 2, firstName: 'Alex', lastName: 'Halina', phone: '0603351212', gender: false, age: 23},
        {id: 3, firstName: 'Alina', lastName: 'rocket', phone: '0402345541', gender: false, age: 55},
    ],

};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_DATA':
            return {
                ...state,
                items: payload,
            };

        case "ADD_TODO":
            const todos = state.items;
            const newId = todos.length + 1;
            let todo = payload.todo;
            todo['id'] = newId;
            todos.push(todo)

            return {
                ...state,
                items: [...todos]
            };

        default:
            return state
    }
}