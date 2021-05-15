import React, { Children } from 'react';
import './header.scss';
import InputField from '../search/Input';

const Header=({handleChange,searchTerm,handleOnSubmit})=>{
   
    return (
        <div className='header'>
            <InputField className='input-field' type='text' 
            id='inputField' onChange={handleChange} onSubmit={handleOnSubmit} value={searchTerm}/>
        </div>
    );

}

export default Header;