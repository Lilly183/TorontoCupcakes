import React, {useState} from 'react';
import Axios from "axios";
import InputGroup from './InputGroup';

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
        defines the name attribute for any given <Input Group/> component) does not match exactly the name of a property 
        within registerData, we're referring to something that doesn't exist, so how can we possibly update its value with 
        the contents of the <input> tag? 
        */

        setRegisterData({ ...registerData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        Axios.post("/api/registerUser", 
            registerData
        ).then(() =>
        {
            alert("Success!");
        })
    };

    const inputsArr = 
    [
        {id: 1, name: "username", heading: "Username", type: "text", required: true, placeholder: "Username", value: registerData.username, onChangeHandler: handleChange},
        {id: 2, name: "password", heading: "Password", type: "password", required: true, placeholder: "abc123", value: registerData.password, onChangeHandler: handleChange},
        {id: 3, name: "email", heading: "Email", type: "email", required: true, placeholder: "Example@email.com", value: registerData.email, onChangeHandler: handleChange},
        {id: 4, name: "firstName", heading: "First Name", type: "text", required: false, placeholder: "John", value: registerData.firstName, onChangeHandler: handleChange},
        {id: 5, name: "lastName", heading: "Last Name", type: "text", required: false, placeholder: "Example@email.com", value: registerData.lastName, onChangeHandler: handleChange}
    ];

    const registerFormInputs = inputsArr.map((input) =>
        <InputGroup
            key = {input.id}
            name = {input.name}
            heading = {input.heading}
            type = {input.type}
            required = {input.required}
            placeholder = {input.placeholder}
            value = {input.value}
            onChangeHandler = {input.onChangeHandler}
        />
    );

    return (

        <main className="bg-dark">
            <section className="spad bg-secondary">
                <div className="container bg-success">
                    <div className="row bg-danger">
                        <div className="col-lg-12">

                            <div className="row mb-5">
                                <div className="col-12">
                                    <h2 className="site-section-heading text-center pt-5">Register</h2>
                                </div>
                            </div>


                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-md-7">
                                        
                                        <form id="registerForm" className="register-form p-4 bg-dark border border-dark" onSubmit={handleSubmit}>
                                            {/* <!-- Register Form Inputs --> */}
                                            {registerFormInputs}
                                            {/* <!-- Register Form Submit Button --> */}
                                            <div className="row form-group text-center">
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-primary btn-lg btn-block mt-3 w-50">Register Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Register