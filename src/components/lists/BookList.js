import React from 'react';
import Book from '../representational/Book';


    
const BookList = (prams) =>{
    return (
         prams.books.map((book, index)=> {
            return(
                <Book 
                    bookName = {book.bookName}
                    writer = {book.writer}
                    delete = {() => prams.deleteBookState(index)}
                    key = {index}
                    change = {(event) => prams.changeInputStateProps(event,index)}
                />
            );
            
        })
        
    );
}

export default BookList ;

