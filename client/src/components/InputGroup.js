import React from 'react';

function InputGroup (props)
{
  return (
    <div className="row form-group my-3">
        <div className="col-md-12">
            <label className="text-white" htmlFor={props.id}>{props.heading}{props.required && <span className="text-danger">*</span>}</label>
            <input type={props.inputType} id={props.id} name={props.id} className="form-control" placeholder={props.placeholder} required={props.required} value={props.value} onChange={props.onChangeHandler}/>
        </div>
    </div>
  )
}

export default InputGroup;