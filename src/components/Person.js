
import React, {Component} from 'react';

// static componet function
// function Person() {
//   return(
//     <div className='content' >
//       <h2>This content from person ss component</h2>
//     </div>
//   );
// }

// dynamic componet function

// let Person = (parms) => {
//     console.log(parms);
//     return (
//             <div>
//                 <h1> 
//                     Name : {parms.name} and Age : {parms.age} <br/>
//                     Extra Info : {  parms.children }
//                  </h1>
//             </div>
//     );
// }

// dynamic class componet function

class Person extends Component {
     constructor(props) {
        super(props);
     }
    render() {
        // console.log(this.props);
        return(
            <div>
                <h1> 
                    Name : {this.props.name} and Age : {this.props.age} <br/>
                    Extra Info : {  this.props.children }
                 </h1>
            </div>
        );
    }
}

export default Person;