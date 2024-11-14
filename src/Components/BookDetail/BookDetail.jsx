import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadlist } from '../Utility/AddtoDb';

const BookDetail = () => {
    const {bookId}=useParams();
    const id=parseInt(bookId);
    const data =useLoaderData();

    const book=data.find(book=> book.bookId=== id);
    console.log(book);

    const {bookId: currentBookid, image}=book;

    const handleMarkAsRead=(id)=>{

        addToStoredReadlist(id);
    }

    return (
        <div>
            <h2>Book details: {bookId}</h2>
            <img className='w-40' src={image} alt="" />
            <br />
            <button onClick={()=> handleMarkAsRead(bookId)} className='btn btn-accent btn-outline mr-5' >Read</button>
            <button className='btn btn-outline'>Wishlist</button>

        </div>
    );
};

export default BookDetail;