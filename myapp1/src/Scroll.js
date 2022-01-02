import React from "react";
const Scroll = (props) =>{

    return(
        <div style={{overflowY: 'scroll', border:'2px solid green', height:'430px'}}>
            {props.children}
        </div>
    )
}
export default Scroll