import React from 'react';

const InputGroup = (props) =>
{
  return (
    <div className="row form-group my-3">
        <div className="col-md-12">
            <label className="text-white" htmlFor={props.name}>{props.heading}{props.required && <span className="text-danger">*</span>}</label>
            <input type={props.type} id={props.name} name={props.name} className="form-control" placeholder={props.placeholder} required={props.required} value={props.value} onChange={props.onChangeHandler}/>
        </div>
    </div>
  )
}

export default InputGroup;