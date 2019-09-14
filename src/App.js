import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const App = () => {
  const [books, setBooks] = useState([
    { title: "A warrior", author: "Mamle", id: 0 }
  ]);

  const addBook = book => {
    // eslint-disable-next-line no-use-before-define
    let books = [...books, book];
    book.id = books.indexOf(book);
    setBooks({
      books
    });
  };

  const deleteBook = id => {
    let books = this.books.filter(book => {
      return book.id !== id;
    });
    this.setBooks({
      books
    });
  };
  return (
    <div className="App">
      <Navbar books={books} />
      <BookList books={books} deleteBook={deleteBook} />
      <BookForm addBook={addBook} />
    </div>
  );
};

export default App;
