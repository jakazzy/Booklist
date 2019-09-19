import React, { useReducer, createContext } from "react";
import BookReducer from "./BookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(BookReducer, [
    { title: "A warrior", author: "Mamle", id: 0 },
    { title: "A holy grail", author: "Nutifa", id: 1 }
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
