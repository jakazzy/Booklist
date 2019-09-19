import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "A warrior", author: "Mamle", id: 0 },
    { title: "A holy grail", author: "Nutifa", id: 1 }
  ]);
  const addBook = book => {
    book.id = books.indexOf(book);
    setBooks([...books, book]);
  };

  const deleteBook = id => {
    let allBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(allBooks);
  };
  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
