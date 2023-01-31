
import React, { Component } from 'react';
import './App.css';
// import Person from './components/Person';
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

// class App extends Component {
//   render() {
//       return (
//           <div className="App">
//               <h1> Book list</h1>
//               <Book bookName="Himuer biye"  writer="Humayun Ahmed"/>
//               <Book bookName="Noksi Kathar Mat"  writer="Polli kobi Josimoddin"/>
//           </div>
//         );
//   }
// }

//state 
class App extends Component {

  state = {
    books : [
      {bookName : "Himuer biye", writer : "Humayun Ahmed"},
      {bookName : "Noksi Kathar Mat", writer : "Polli kobi Josimoddin"},
      {bookName : "1974", writer : "George Orwell"}
    ]
  }

  changeStateProps = (newBookName) => {
    this.setState({
        books : [
          {bookName : newBookName, writer : "Kazi Nozrul Islam11"},
          {bookName : "Noksi Kathar Matee", writer : "Polli kobi Josimoddinee"},
          {bookName : "1974eee", writer : "George Orwellee"}
        ]
      });
  }

  changeInputStateProps = (event) => {
    this.setState({
      books : [
        {bookName : event.target.value, writer : "Kazi Nozrul Islam"},
        {bookName : "Noksi Kathar Mat", writer : "Polli kobi Josimoddin"},
        {bookName : "1974", writer : "George Orwell"}
      ]
    });
  }

  render() {

		var style = {
			border : "1ps solid",
			backgroundColor : 'black',
			borderRadius : '5px',
			color: 'white',
			width: '300px',
			margin: '40px auto',
			textAlign: 'center'
		};
		
      return (
          	<div className="App">
              	<h1 style={style}>Book list</h1>
              	<button onClick={() =>this.changeStateProps('Agni bina')}> Change State</button>

              	<input type="text"  onChange={this.changeInputStateProps} />

				<Book 
					bookName = {this.state.books[0].bookName} 
					writer = {this.state.books[0].writer}
					change ={this.changeInputStateProps}
				/>
			    <br/> 
				<Book 
					bookName = {this.state.books[1].bookName} 
					writer = {this.state.books[1].writer}
				/>
			    <br/> 
				<Book 
					bookName = {this.state.books[2].bookName} 
					writer = {this.state.books[2].writer}
					change = {this.changeStateProps.bind(this, '1984')}
				/>
          	</div>
        );
  }
}

export default App;
