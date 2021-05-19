import React from 'react';
import './Pagination.scss';

const Pagination=({pages,nextPage,currentPage})=>{
    const pageLinks=[];
    for(let i=1; i<=pages+1; i++) {
        let active= currentPage===i?'active':'';

        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={()=>nextPage(i)}><button>{i}</button></li>)
    }
    return (
        <div className="container">
            <div className='row'>
                <ul className="pagination">
                    {currentPage>1? <li className={`waves-effect`} onClick={()=>nextPage(currentPage-1)}><button>Prev</button></li>:''}
                    {pageLinks}
                    {currentPage<pages+1? <li className={`waves-effect`} onClick={()=>nextPage(currentPage+1)}><button>Next</button></li>:''}
                </ul>
            </div>
        </div>
    );
};

export default Pagination;