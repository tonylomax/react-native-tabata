import React from "react";
import renderer from "react-test-renderer";
import App from "../../App";
// import Main from "../screens/Main";

// Main.soundObject = jest.fn();

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree.children.length).toBe(2);
  });
});
