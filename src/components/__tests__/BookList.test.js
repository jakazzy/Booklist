import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.
import { createSerializer } from "enzyme-to-json";
import BookList from "../BookList";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Header component", () => {
  let wrapper;

  beforeEach(() => {
    let props = { books: [{ title: "a warrior", author: "Mamle", id: 1 }] };
    wrapper = shallow(<BookList books={props.books} />);
  });

  it("renders without crashing", () => {});

  it("Should display book title", () => {
    expect(wrapper.find(".title").text()).toEqual("a warrior");
  });

  it("Should display authors name", () => {
    expect(wrapper.find(".author").text()).toEqual("Mamle");
  });

  it("displays currently you have no books to display when emplty", () => {
    wrapper.setProps({ books: [] });
    // console.log(wrapper.debug());
    expect(wrapper.find(".empty").text()).toEqual(
      "No books to read. Hello free time :)."
    );
  });
});
