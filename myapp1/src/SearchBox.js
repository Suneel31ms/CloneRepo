import React from "react";
 const SearchBox = ({searchfield, searchChange}) =>{
     return(
        <input className="pa3 ba b--green br3 bg-dark-green" type='search' placeholder="Search robotos" onChange={searchChange}/>
     );
 }
 export default SearchBox; 