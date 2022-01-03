import React, { Component } from 'react'

export class Card extends Component {
    render() {
        const{id, name, email} = this.props
        return (
            <div className="bg-green dib br3 pa1  mv1 mh2 grow cli tc bw2 shadow-5">
               <img src={`https://robohash.org/${id}`} alt="robo" /> 
               <div >
                   <h2>id={id}</h2>
                   <h1>{name}</h1>
                   <p>{email}</p>
               </div>
            </div>
        )
    } 
}

export default Card
