import React from "react";

const Navbar = props => {
  const { books } = props;

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
