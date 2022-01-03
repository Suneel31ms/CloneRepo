import React, { Component } from 'react'
import Card from './card'

class CardList extends Component {
    render() {
        const {robot} = this.props
        return (
            <div>
          {
              robot.map((robo) =>{
                  return(
                      <Card 
                      key={robo.id}
                      id={robo.id}
                      name={robo.name}
                      email={robo.email}
                      />
                  )
              })
          }
                  
            </div>
        )
    } 
}

export default CardList
