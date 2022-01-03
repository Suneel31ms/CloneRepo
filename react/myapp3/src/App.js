import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
// import { robot } from './components/robots';
import 'tachyons'
import SearchBox from './components/SearchBox';
import Scrol from './components/Scrol';
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      robot:[],
       searchBox:''
    }
  }
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(users=>{
     this.setState({robot:users})
   })
   .catch(console.log('error'))
 }
 handleSearchBox =(e)=>{
     this.setState({
       searchBox:e.target.value
     }) 
 }
 render(){
   const {searchBox,robot}=this.state
   const filterRobots =robot.filter(robo=>{
     return(
      robo.name.toLowerCase().includes(searchBox.toLowerCase())
     )
   })
  return (
    <div className="App tc bg-light-green pa2">
      <h1 className='dark-green'>Robo Friends</h1>
      <SearchBox SearchBoxfield={this.handleSearchBox}/>
    <Scrol>
    <CardList robot={filterRobots}/>
    </Scrol>
    </div>
  );
}

 }
  
export default App;
