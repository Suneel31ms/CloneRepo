import React from 'react'

function SearchBox({SearchBoxfield}) {
    return (
        <div className=' pa3  '>
            <input className='pa3 ba b--green br3 bg-dark-green' type="search" 
            onChange={SearchBoxfield}
            />
        </div>
    )
}

export default SearchBox
