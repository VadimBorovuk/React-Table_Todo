import React, {useEffect, useState} from 'react';
import orderBy from 'lodash/orderBy';

import './style.scss';
import {connect} from "react-redux";

const TableInfo = ({data}) => {
    const [arrTodos, setTodos] = useState([]);
    const [typeOfSortFirstName, setTypeOfSortFirstName] = useState('asc');
    const [typeOfSortLastName, setTypeOfSortLastName] = useState('asc');
    const [typeOfSortPhone, setTypeOfSortPhone] = useState('asc');
    const [typeOfSortGender, setTypeOfSortGender] = useState('asc');
    const [typeOfSortAge, setTypeOfSortAge] = useState('asc');

    localStorage.setItem('data', JSON.stringify(data))

    useEffect(() => {
        console.log('todos ', data)
        setTodos(data)
        localStorage.getItem('data')
    }, [data]);


    const sortBy = (data, column, type) => {
        setTodos(orderBy(data, column, type));
    }

    const changeTypeOfSort = (field, setter) => {
        if (field === 'asc') {
            setter('desc');
        } else if (field === 'desc') {
            setter('asc');
        }
    }

    const handleItemClick = (id) => {
        switch (id) {
            case 'firstName':
                changeTypeOfSort(typeOfSortFirstName, setTypeOfSortFirstName);
                sortBy(arrTodos, 'firstName', typeOfSortFirstName);
                break;
            case 'lastName':
                changeTypeOfSort(typeOfSortLastName, setTypeOfSortLastName);
                sortBy(arrTodos, 'lastName', typeOfSortLastName);
                break
            case 'phone':
                changeTypeOfSort(typeOfSortPhone, setTypeOfSortPhone);
                sortBy(arrTodos, 'phone', typeOfSortPhone);
                break
            case 'gender':
                changeTypeOfSort(typeOfSortGender, setTypeOfSortGender);
                sortBy(arrTodos, 'gender', typeOfSortGender);
                break
            case 'age':
                changeTypeOfSort(typeOfSortAge, setTypeOfSortAge);
                sortBy(arrTodos, 'age', typeOfSortAge);
                break
        }
    }

    const closeTodo = (id) => {
        let newArr = arrTodos.filter(todo => todo.id !== id)
        setTodos(newArr);
    }

    return (
        <table className="col-10 main-table">
            <thead>
            <tr className="table-header">
                <th className="head-item firstName">
                    <button type="button" onClick={() => {
                        handleItemClick('firstName')
                    }}>
                        FirstName
                    </button>
                </th>
                <th className="head-item lastName">
                    <button type="button" onClick={() => {
                        handleItemClick('lastName')
                    }}>
                        lastName
                    </button>
                </th>
                <th className="head-item phone">
                    <button type="button" onClick={() => {
                        handleItemClick('phone')
                    }}>
                        phone
                    </button>
                </th>
                <th className="head-item gender">
                    <button type="button" onClick={() => {
                        handleItemClick('gender')
                    }}>
                        gender
                    </button>
                </th>
                <th className="head-item domain">
                    <button type="button" onClick={() => {
                        handleItemClick('age')
                    }}>
                        age
                    </button>
                </th>
                <th className="head-item close"></th>
            </tr>
            </thead>
            <tbody>
            {
                arrTodos.map(item => {
                    return (
                        <tr title="check comment" className="data-items" key={item.id}>
                            <td className="data-item firstName">{item.firstName}</td>
                            <td className="data-item lastName">{item.lastName}</td>
                            <td className="data-item phone">{item.phone}</td>
                            <td className="data-item gender">{item.gender}</td>
                            <td className="data-item age">{item.age}</td>
                            <td className="data-item close" onClick={() => closeTodo(item.id)}>&times;</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
};

const mapStateToProps = ({todos}) => ({
    data: todos.items
});

export default connect(mapStateToProps, null)(TableInfo);
