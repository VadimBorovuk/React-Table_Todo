import React from 'react';
import {addTodo} from "./modules/actions";
import {connect} from 'react-redux'
import Form from "./components/Form";
import TableInfo from "./components/TableInfo";
import Loader from "./components/Loader/Loader";

const App = ({addTodo}) => {

    return (
        <div className="table-info">
            <div className="container">
                <Form addTodo={addTodo}/>
                <TableInfo/>
            </div>
        </div>
    );
};

const mapStateToProps = ({todos}) => ({
    loading: todos.loading
});

const mapDispatchToProp = dispatch => ({
    addTodo: (todo) => dispatch(addTodo({todo}))
});

export default connect(mapStateToProps, mapDispatchToProp)(App);
