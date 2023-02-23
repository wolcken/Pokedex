import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <input className='input-search' type="text" />
            <button className='button-search' onClick={() => {
                alert('aun pendiente')
            }}>
                <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
        </div>
    )
}

export default Search
