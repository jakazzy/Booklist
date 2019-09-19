import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookContextProvider from "./BookContext";

const App = () => {
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
    <div className="App">
      <BookContextProvider>
        <Navbar books={books} />
        <BookList books={books} deleteBook={deleteBook} />
        <BookForm addBook={addBook} />
      </BookContextProvider>
    </div>
  );
};

export default App;
