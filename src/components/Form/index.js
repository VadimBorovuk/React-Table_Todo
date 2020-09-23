import React, {useEffect, useState} from 'react';
import './style.scss';

const Form = ({addTodo}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');


    const sendData = (e) => {
        e.preventDefault();
        let arrUsers = {};
        let formControls = document.querySelectorAll('.form-control');
        if (firstName !== "" && lastName !== "" && phone !== "" && gender !== "" && age !== "") {
            formControls.forEach(item => {
               item.classList.remove('error')
            })
            arrUsers['firstName'] = firstName;
            arrUsers['lastName'] = lastName;
            arrUsers['phone'] = phone;
            arrUsers['gender'] = gender;
            arrUsers['age'] = age;

            addTodo(arrUsers);
        } else {
            formControls.forEach(item => {
                return item.classList.add('error')
            })
            alert('please check all fields')
        }
    }

    return (
        <div className="col-8 form-block">
            <form onSubmit={sendData} id="mainForm">
                <div className="form-group col-6">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text"
                           className="form-control"
                           value={firstName}
                           onChange={e => setFirstName(e.target.value)}
                           id="firstName"
                           placeholder="Enter firstName"/>
                    <p className="text-err">error</p>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text"
                           className="form-control"
                           value={lastName}
                           onChange={e => setLastName(e.target.value)}
                           id="lastName"
                           placeholder="Enter lastName"/>
                    <p className="text-err">error</p>
                </div>
                <div className="form-group col-12">
                    <label htmlFor="phone">Phone</label>
                    <input type="number"
                           className="form-control"
                           value={phone}
                           onChange={e => setPhone(e.target.value)}
                           id="phone"
                           placeholder="Enter phone"/>
                    <p className="text-err">error</p>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="gender">Gender</label>
                    <input type="text"
                           className="form-control"
                           value={gender}
                           onChange={e => setGender(e.target.value)}
                           id="gender"
                           placeholder="Enter gender"/>
                    <p className="text-err">error</p>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="age">Age</label>
                    <input type="number"
                           className="form-control"
                           value={age}
                           onChange={e => setAge(e.target.value)}
                           id="age"
                           placeholder="Enter age"/>
                    <p className="text-err">error</p>
                </div>
                <button type="submit" className="btn btn-success">Send</button>
            </form>
        </div>
    );
};

export default Form;
