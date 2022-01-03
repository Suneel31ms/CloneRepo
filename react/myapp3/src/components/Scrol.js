import React from 'react'

export default function Scrol(props) {
    return (
        <div style={{overflowY:'scroll', height:'400px'}}>
            {props.children}
        </div>
    )
}
