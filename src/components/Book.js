import React from 'react';

const  Book = poprs => {
    console.log(poprs);
    return (
        <div>
            <h1>Book Name: {poprs.bookName} & Writer : {poprs.writer}</h1> 
        </div>
    );
}

export default Book;