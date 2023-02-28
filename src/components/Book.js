import React from 'react';
import '../StyleSheet/Book.css'

const  Book = props => {
    return (
        <div className='book'>
        
            <h2 onClick={props.delete}>Book Name : {props.bookName}</h2> 
            <h3 >Writer : {props.writer}</h3>
            
            <input type="text"  onChange={props.change} />
            <br/>
            <br/>
        </div>
        
    );
}

export default Book;