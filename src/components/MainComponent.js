import React, { Component } from 'react';

import bookList from '../assets/books';
import BookLists from './lists/BookList';
class MainComponent extends Component {
    
    state = {
		books: bookList,
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
			books = <BookLists 
				books = {this.state.books} 
			  	deleteBookState = {this.deleteBookState}
			  	changeInputStateProps = {this.changeInputStateProps}
			/>
		}
		

		return (
			<div className="App">
				<h1 style={style}>Book list</h1>
				<button onClick={() => this.toggoleBooks()}>Toggle Books</button>
				
				{ books }
			</div>
		);
	}
    
}

export default MainComponent ;