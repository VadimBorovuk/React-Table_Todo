export const getData = (data) => ({
    type: 'GET_DATA',
    payload: data
});

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
});