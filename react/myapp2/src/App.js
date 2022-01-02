import CardList from "./cardlist";
import SearchBox from './SearchBox';
// import { robots } from "./robots";
import axios from 'axios'
import React, { Component } from 'react'
import Scroll from "./Scroll";
// import ErrorBoundary from "./ErrorBoundary";

 class App extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              robot:[],
              searchfield:''
         }
     }
     componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        //  .then(response=>{
        //     return response.json()
        //  })
        //  .then(users=>{
        //      this.setState({robot:users})
        //  })
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            this.setState({
                robot:res.data
            })
        })
       .catch(error=>{console.log(error);})
     }
     onSearchChange=(e)=>{
         this.setState({
             searchfield:e.target.value
         })
     }
    render() {
        const {robot, searchfield} =this.state
    const filteredRobots = robot.filter(robo=>{
        return(
            robo.name.toLowerCase().includes(searchfield.toLowerCase())
        )
    })
        return (

            <div className="tc bg-light-green pa2">
                <h1 className="dark-green">Robo Friends</h1>
                <SearchBox searchChange ={this.onSearchChange} />
                <Scroll>
                {/* <ErrorBoundary>
                <CardList robots={filteredRobots} />
                </ErrorBoundary> */}
                <CardList robots={filteredRobots} />
                </Scroll>

            </div>

        )
    }
}

export default App
