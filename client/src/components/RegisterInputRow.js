import React from 'react';

const RegisterInputRow = (props) =>
{
    return (
        <fieldset className="row form-group my-3">
            <div className="col-12">
                <label className="text-black fw-bold mb-1" htmlFor={props.name}>{props.heading}{props.required && <span className="text-danger">*</span>}</label>
                <input type={props.type} id={props.name} name={props.name} className="form-control" placeholder={props.placeholder} required={props.required} maxLength={props.maxLength} value={props.value} onChange={props.onChangeHandler}/>
            </div>
        </fieldset>
    )
}

export default RegisterInputRow;