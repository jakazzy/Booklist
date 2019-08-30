import React, { Component } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{ title: "A warrior", author: "Mamle", id: 1 }]
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar books={this.state.books} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
