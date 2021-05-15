import React, { Children } from 'react';
import './header.scss';
import InputField from '../search/Input';

const Header=({handleChange,searchTerm,handleOnSubmit})=>{
   
    return (
        <div className='header'>
            {/* <Logo/> */}
            <InputField className='input-field' type='text' 
            id='inputField' onChange={handleChange} onSubmit={handleOnSubmit} value={searchTerm}/>
        </div>
    );

}

// const InputField =({type, id, onChange,onSubmit, value})=> {
//     return (
//         <form className='input' onSubmit={onSubmit}>
//             <label htmlFor={id}><SearchIcon/></label>
//             <input id={id} type={type} onChange={onChange} placeholder='Search...' value={value}/>
//             <Button type='reset'/>
//         </form>
//     );
// }; 
//************************************ */

//********************************* */

// const Logo =()=>{
//     return (
//         <div>
//             <span><i class="far fa-play-circle"></i></span>
//         </div>
//     );
//    };

// const SearchIcon =()=>{
//  return (
    
//          <span><i class="fas fa-search"></i></span>
    
//  );
// };

// const Button =({type, id})=> {
//     return (
//       <button type={type} id={id}><i class="fas fa-times"></i></button>  
//     );
// }

export default Header;