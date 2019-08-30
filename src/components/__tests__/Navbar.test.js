import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.
import { createSerializer } from "enzyme-to-json";
import Navbar from "../Navbar";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Header component", () => {
  let wrapper;

  beforeEach(() => {
    let props = { books: [{ Title: "", Author: "" }] };
    wrapper = shallow(<Navbar books={props.books} />);
  });

  it("renders without crashing", () => {});
  it("displays number of books to be read", () => {
    wrapper.setProps({ books: [{ title: "", author: "", id: 1 }] });

    expect(wrapper.find("span").length).toEqual(1);
  });
  it("describes the purpose of the app", () => {
    // console.log(wrapper.find("h1").debug());
    expect(wrapper.find("h1").text()).toEqual("Ninja Reading List");
  });
});
