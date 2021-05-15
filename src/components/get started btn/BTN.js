import React from 'react';
import './Btn.scss';
import {Link} from 'react-router-dom';


const Btn=({id,target})=> {
    return (
        
        <div className='btn'>
            <Link className="btn-link" to="/movies">
                <svg className='btn-link-svg' style={{height:'60' , width:'320'}}>
                    <rect className='btn-link-svg-rect' style={{height:'60' , width:'320'}}/>
                </svg>
                <div className='btn-link-text'>GET STARTED</div>
            </Link>
        </div>
            
       
    );
}

export default Btn;