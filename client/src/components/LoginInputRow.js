import React from 'react';

const LoginInputRow = (props) => 
{
    return (
        <fieldset className="input-group my-3">
            <span className="text-center"><i className={"customFormIcon text-white d-flex h-100 align-items-center justify-content-center " + props.icon}></i></span>
            <input type={props.type} id={props.name} name={props.name} className="form-control" placeholder={props.placeholder} required={props.required} maxLength={props.maxLength} value={props.value} onChange={props.onChangeHandler}/>
        </fieldset>
    )
}

export default LoginInputRow;