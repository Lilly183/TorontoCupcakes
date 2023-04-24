import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import RegisterInputRow from './RegisterInputRow';
import '../css/Form.css';

const Register = () => 
{
    const [registerData, setRegisterData] = useState(
    {
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: ""
    });

    const handleChange = (e) =>
    {
        /*
        Note that this uses e.target.name (the value of the name attribute for whatever element is responsible for firing 
        the event) to set a corresponding property within the registerData object. If the value of prop.name (which also 
        defines the name attribute for any given <Input Row/> component) does not match exactly the name of a property 
        within registerData, we're referring to something that doesn't exist, so how can we possibly update its value with 
        the contents of the <input> tag? 
        */

        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        Axios.post("/api/registerUser", registerData)
        .then(() =>
        {
            alert("Success!");
        })
    };

    const inputsArr = 
    [
        {id: 1, name: "username", heading: "Username", type: "text", placeholder: "Username", required: true, maxLength: 64, value: registerData.username, onChangeHandler: handleChange},
        {id: 2, name: "password", heading: "Password", type: "password", placeholder: "abc123", required: true, maxLength: null, value: registerData.password, onChangeHandler: handleChange},
        {id: 3, name: "email", heading: "Email", type: "email", placeholder: "Example@email.com", required: true, maxLength: 256, value: registerData.email, onChangeHandler: handleChange},
        {id: 4, name: "firstName", heading: "First Name", type: "text", placeholder: "John", required: false, maxLength: 64, value: registerData.firstName, onChangeHandler: handleChange},
        {id: 5, name: "lastName", heading: "Last Name", type: "text", placeholder: "Doe", required: false, maxLength: 64, value: registerData.lastName, onChangeHandler: handleChange}
    ];

    const registerFormInputs = inputsArr.map((input) =>
        <RegisterInputRow
            key = {input.id}
            name = {input.name}
            heading = {input.heading}
            type = {input.type}
            placeholder = {input.placeholder}
            required = {input.required}
            maxLength = {input.maxLength}
            value = {input.value}
            onChangeHandler = {input.onChangeHandler}
        />
    );

    return (
        <main>
            <section className="spad">
                <div className="pageContainer container pb-4">
                    <div className="container pt-2 pb-4">
                        <h2 className="pageHeading text-start text-black">Register</h2>
                    </div>                    
                    <div className="container">
                        <form className="customForm pt-0 px-4 pb-4" onSubmit={handleSubmit}>
                            {registerFormInputs}
                            <div className="row text-center pt-2">
                                <div className="col-12 py-1">
                                    <button type="submit" className="btn btn-submit w-100">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <h6 className="text-center text-black mt-2 py-1">Already have an account with us? <Link to="/Login" className="themeLink fw-semibold">Sign-in here!</Link></h6>
            </section>
        </main>
    )
}

export default Register;