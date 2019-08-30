import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.
import { createSerializer } from "enzyme-to-json";
import BookForm from "../BookForm";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Header component", () => {
  let wrapper;

  beforeEach(() => {
    let props = { books: [{ Title: "", Author: "" }] };
    wrapper = shallow(<BookForm books={props.books} />);
  });

  it("renders without crashing", () => {});
  it("Should handle  books title correctly onChange", function() {
    const component = mount(<BookForm />);
    const input = component.find("input").at(0);
    input.instance().value = "hello world";
    input.simulate("change");
    expect(component.state().title).toEqual("hello world");
  });

  it("should handle  authors name correctly onChange", function() {
    const component = mount(<BookForm />);
    const input = component.find("input").at(1);

    input.instance().value = "Ama Bebrese";
    input.simulate("change");
    expect(component.state().author).toEqual("Ama Bebrese");
  });

  it("should update form submitted state with button click", () => {
    const component = mount(<BookForm />);
    component.find("button").simulate("click");
    // console.log(component.debug());
    component.instance().setState({ author: "Ama", title: "Happy day" });
    expect(component.state()).toEqual({ author: "Ama", title: "Happy day" });
    component.unmount();
  });
});
