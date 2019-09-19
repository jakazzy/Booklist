import React, { useState, useContext } from "react";
import { BookContext } from "../BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [values, setValues] = useState({
    title: "",
    author: ""
  });

  const handleChange = event => {
    event.persist();
    setValues(values => ({ ...values, [event.target.id]: event.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBook(values);
    setValues({
      title: "",
      author: ""
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        id="title"
        value={values.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="author name"
        value={values.author}
        id="author"
        onChange={handleChange}
        required
      />
      <button type="submit">add book</button>
    </form>
  );
};

export default BookForm;
