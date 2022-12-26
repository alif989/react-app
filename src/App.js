
import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

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
class App extends Component {
  render() {
      return (
          <div className="App">
              <h1> Noobyia solutions Ltd.</h1>
              <Person name="Alif" age="16">I am from noobyia solutions</Person>
              <Person name="Rahim" age="29" />
              <Person name="Karim" age="30" />
              <Person name="kuddus" age="25" />
          </div>
        );
  }
}

export default App;
