import React, { Component } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{ title: "A warrior", author: "Mamle", id: 1 }]
    };
  }

  addBook = book => {
    let books = [...this.state.books, book];
    book.id = books.indexOf(book);
    this.setState({
      books
    });
  };

  deleteBook = id => {
    let books = this.state.books.filter(book => {
      return book.id !== id;
    });
    this.setState({
      books
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar books={this.state.books} />
        <BookList books={this.state.books} deleteBook={this.deleteBook} />
        <BookForm addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
