import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks]=useState([]);
    useEffect( ()=>{
        fetch("./booksData.json")
        .then(res=> res.json())
        .then(data=> setBooks(data))
    } ,[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md: gap-8'>
            {
                books.map((book) => <Book key={book.bookId} book={book} ></Book> )

            }
        </div>
        </div>
    );
};

export default Books;

// to load data 
/*
1. state to store the book
2. useEffect 
3. to fetch the data from the API
4. set the data in the state


*/