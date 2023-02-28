import React, { Component } from 'react';
import Book from './Book';

class MainComponent extends Component {
    
    state = {
		books: [
			{ bookName: "Himuer biye", writer: "Humayun Ahmed" },
			{ bookName: "Noksi Kathar Mat", writer: "Polli kobi Josimoddin" },
			{ bookName: "1974", writer: "George Orwell" }
		],
		showBooks:true
	}
	
	deleteBookState = (index) => {
		const books = [...this.state.books];
		books.splice(index,1);
		this.setState({
			books: books
		});
	}

	changeStateProps = (newBookName) => {
		this.setState({
			books: [
				{ bookName: newBookName, writer: "Kazi Nozrul Islam11" },
				{ bookName: "Noksi Kathar Matee", writer: "Polli kobi Josimoddinee" },
				{ bookName: "1974eee", writer: "George Orwellee" }
			]
		});
	}
	
	toggoleBooks = () => {
		this.setState({
			showBooks: !this.state.showBooks
		})
	}
	
	// changeInputStateProps = (event) => {
	// 	this.setState({
	// 		books: [
	// 			{ bookName: event.target.value, writer: "Kazi Nozrul Islam" },
	// 			{ bookName: "Noksi Kathar Mat", writer: "Polli kobi Josimoddin" },
	// 			{ bookName: "1974", writer: "George Orwell" }
	// 		]
	// 	});
	// }
	changeInputStateProps = (event,index) => {
		
		const book = { ...this.state.books[index] };
		book.bookName = event.target.value ;
		const books = [...this.state.books]
		books[index] = book;
		this.setState({
			books:books
		});
	}

	render() {

		var style = {
			border: "1ps solid",
			backgroundColor: 'black',
			borderRadius: '5px',
			color: 'white',
			width: '300px',
			margin: '40px auto',
			textAlign: 'center'
		};
		
		let books = null;
		if(this.state.showBooks) {
			 books = this.state.books.map((book, index)=> {
				return(
					<Book 
						bookName = {book.bookName}
						writer = {book.writer}
						delete = {() => this.deleteBookState(index)}
						key = {index}
						change = {(event) => this.changeInputStateProps(event,index)}
					/>
				);
				
			});
		}
		

		return (
			<div className="App">
				<h1 style={style}>Book list</h1>
				{/* <button onClick={() => this.changeStateProps('Agni bina')}> Change State</button> */}
				<button onClick={() => this.toggoleBooks()}>Toggle Books</button>

				{/* <input type="text" onChange={this.changeInputStateProps} /> */}

				{/* <Book
					bookName={this.state.books[0].bookName}
					writer={this.state.books[0].writer}
					change={this.changeInputStateProps}
				/>
				<br />
				<Book
					bookName={this.state.books[1].bookName}
					writer={this.state.books[1].writer}
				/>
				<br />
				<Book
					bookName={this.state.books[2].bookName}
					writer={this.state.books[2].writer}
					change={this.changeStateProps.bind(this, '1984')}
				/> */}
				
				{ books }
			</div>
		);
	}
    
}

export default MainComponent ;