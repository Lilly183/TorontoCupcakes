import React, {useState} from 'react';
import InputGroup from './InputGroup';
import Axios from "axios";

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
        the event) to set a corresponding property within the registerData object. If the value of prop.id (which also 
        defines the name attribute for any given <Input Group/> component) does not match exactly the name of a property 
        within registerData, we're referring to something that doesn't exist, so how can we possibly update its value with 
        the contents of the <input> tag? 
        */

        setRegisterData({ ...registerData, [e.target.name]: e.target.value});
    };

    const submitRegister = () =>
    {
        Axios.post("/api/registerUser", 
            registerData
        ).then(() =>
        {
            alert("Success!");
        })
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="site-section-heading text-center pt-5">Register</h2>
                        </div>
                    </div>

                    <div className="register-form p-4 bg-dark border border-dark">
                        <form id="registerForm">
                            <InputGroup
                                id = "username"
                                heading = "Username"
                                inputType = "text"
                                required = {true}
                                placeholder = "Username"
                                value = {registerData.username}
                                onChangeHandler = {handleChange}
                            />
                            <InputGroup
                                id = "password"
                                heading = "Password"
                                inputType = "password"
                                required = {true}
                                placeholder = "abc123"
                                value = {registerData.password}
                                onChangeHandler = {handleChange}
                            />
                            <InputGroup
                                id = "email"
                                heading = "Email"
                                inputType = "email"
                                required = {true}
                                placeholder = "Example@email.com"
                                value = {registerData.email}
                                onChangeHandler = {handleChange}
                            />
                            <InputGroup
                                id = "firstName"
                                heading = "First Name"
                                inputType = "text"
                                required = {false}
                                value = {registerData.firstName}
                                placeholder = "John"
                                onChangeHandler = {handleChange}
                            />
                            <InputGroup
                                id = "lastName"
                                heading = "Last Name"
                                inputType = "text"
                                required = {false}
                                value = {registerData.lastName}
                                placeholder = "Doe"
                                onChangeHandler = {handleChange}
                            />
                            {/* <!-- Register Button --> */}
                            <div className="row form-group text-center">
                                <div className="col-md-12">
                                    <button onClick={submitRegister} className="btn btn-primary btn-lg btn-block mt-3 w-50">Register Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register