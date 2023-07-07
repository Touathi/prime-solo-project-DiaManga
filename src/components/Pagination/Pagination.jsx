import React from 'react'

import './Paginationcss.css'

const Pagination = ({ mangasPerPage, totalPosts, paginate}) => {

    const pageNumbers = []
    for (let i = 1; i < Math.ceil(totalPosts / mangasPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
   
        <div className='pagi'>
            {pageNumbers.map(number => (
                <div key={number} className='page-item pagebtn'>
                    <button
                    
                        className='page-link numcolor' 
                        onClick={() => paginate(number)} 
      
                        >
                        {number}
                   
                    </button>
                </div>
            ))}
        </div>

  )
}

export default Pagination
