import React, { useContext } from "react";
import { BookContext } from "../BookContext";

const BookList = props => {
  const { books, deleteBook } = useContext(BookContext);
  const bookList = books.map((book, index) => {
    return (
      <li
        onClick={() => {
          deleteBook(book.id);
        }}
        key={index}
      >
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    );
  });
  return books.length ? (
    <div className="book-list">
      <ul> {bookList}</ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :).</div>
  );
};

export default BookList;
