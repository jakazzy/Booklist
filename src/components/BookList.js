// import React from "react";

// const BookDetails = ({ book }) => {
//   return (
//     <li onClick={() => {}} key={book.id}>
//       <div className="title">{book.title}</div>
//       <div className="author">{book.author}</div>
//     </li>
//   );
// };

// export default BookDetails;

import React from "react";

const BookList = ({ books, deleteBook }) => {
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
