import React from 'react';
import './Input.scss';

const InputField =({type, onChange,onSubmit, value,id})=> {
    return (
        <form className='input' onSubmit={onSubmit}>
            <label htmlFor={id} className='input-label'><i class="fas fa-search"/></label>
            <input id={id} type={type} className='input-field' onChange={onChange} placeholder='Search...' value={value}/>
        </form>
    );
}; 

export default InputField;