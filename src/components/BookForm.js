// import React, { Component } from "react";

// export class BookForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       author: ""
//     };
//   }

// handleChange = e => {
//   this.setState({
//     [e.target.id]: e.target.value
//   });
// };

// handleSubmit = e => {
//   e.preventDefault();
//   this.props.addBook(this.state);
//   this.setState({
//     title: "",
//     author: ""
//   });
// };
//   render() {
// return (
//   <form onSubmit={this.handleSubmit}>
//     <input
//       type="text"
//       placeholder="book title"
//       id="title"
//       value={this.state.title}
//       onChange={this.handleChange}
//       required
//     />
//     <input
//       type="text"
//       placeholder="author name"
//       value={this.state.author}
//       id="author"
//       onChange={this.handleChange}
//       required
//     />
//     <button type="submit">add book</button>
//   </form>
// );
//   }
// }

// export default BookForm;

import React, { useState } from "react";

const BookForm = ({ addBook }) => {
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
    addBook(this.state);
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
