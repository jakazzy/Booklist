import React, { useContext } from "react";
import { BookContext } from "../BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  console.log(books, "this is it");

  return (
    <div className="navbar">
      <h1>Book Reading List</h1>
      <p>
        Currently you have <span>{books.length}</span> book(s) to get through...
      </p>
    </div>
  );
};

export default Navbar;
