import React from 'react'


const Pagination = ({ mangasPerPage, totalPosts, paginate}) => {

    const pageNumbers = []
    for (let i = 1; i < Math.ceil(totalPosts / mangasPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
   
        <div className='pagination'>
            {pageNumbers.map(number => (
                <div key={number} className='page-item'>
                    <button
                    
                        className='page-link' 
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
