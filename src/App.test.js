import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.
import { createSerializer } from "enzyme-to-json";
import App from "./App";
// import axios from "axios";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

let component;
beforeEach(() => {
  component = mount(<App />);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("calls axios.get in #componentDidMount", () => {
//   return component
//     .instance()
//     .componentDidMount()
//     .then(() => {
//       expect(axios.get).toHaveBeenCalled();
//     });
// });

// it("calls axioswith right url", () => {
//   return component
//     .instance()
//     .componentDidMount()
//     .then(() => {
//       expect(axios.get).toHaveBeenCalledWith(
//         "http://localhost:3001/data/books.json"
//       );
//     });
// });
