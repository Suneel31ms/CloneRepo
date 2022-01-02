import React from 'react';
import Card from './card.js';

const CardList = ({robots}) =>{
//    if(false){
//        throw new Error('Noooooooo!')
//    }
    return(
<div>
  {robots.map((robo)=>{
        return (
           
                <Card
                key={robo.id}
                 id={robo.id}
                 name={robo.name}
                 email={robo.email}
                  />
               
            
        );
    })
    }
    </div>
    );
}
export default CardList;