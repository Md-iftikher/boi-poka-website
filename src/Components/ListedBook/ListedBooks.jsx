import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/AddtoDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readlist, setreadlist]=useState([]);


    const allBooks=useLoaderData();
   


    useEffect(()=>{
        const storedReadlist=getStoredReadList();
        const storedReadlistInt=storedReadlist.map(id => parseInt(id));
        const readBooklist=allBooks.filter(book => storedReadlistInt.includes(book.bookId));

        setreadlist(readBooklist);
    },[])




  return (
    <div>
      <h3 className="text-3xl my-5">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Book I read : { readlist.length}</h2>

          {

            readlist.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
