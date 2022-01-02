// import { Component } from "react";
import './Hello.css';
// class Hello extends Component {
//     render() {
//         return (
//             <div className="f1 tc">
//                 <h1>Hello world</h1>
//                 <p>My name is Suneel Chauhan.</p>
//                 <p>{this.props.greet}</p>
//             </div>
//         )
//     }
// }
const Hello=(prop)=>{
    return(
        <div className='tc'>
            <h1>Hello...</h1>
            <p>{prop.greet}</p>
        </div>
    )
}
export default Hello;