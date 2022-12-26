
import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import Book from './components/Book';

// functional Component
// function App() {
//   return (
//     <div className="App">
//         <h1> Noobyia solutions</h1>
//         <Person />
//     </div>
//   );
//   // React.createElement('div',null, React.createElement('h1',null, 'Noobyia solutions'))
// }

// function Person() {
//   return(
//     <div className='content' >
//       <h2>This content from person component</h2>
//     </div>
//   );
// }

//class component
// class App extends Component {
//   render() {
//       return (
//           <div className="App">
//               <h1> Noobyia solutions Ltd.</h1>
//               <Person name="Alif" age="16">I am from noobyia solutions</Person>
//               <Person name="Rahim" age="29" />
//               <Person name="Karim" age="30" />
//               <Person name="kuddus" age="25" />
//               <Book bookName />
//           </div>
//         );
//   }
// }
class App extends Component {
  render() {
      return (
          <div className="App">
              <h1> Book list</h1>
              <Book bookName="Himuer biye"  writer="Humayun Ahmed"/>
              <Book bookName="Noksi Kathar Mat"  writer="Poli kobi Josimoddin"/>
          </div>
        );
  }
}

export default App;
