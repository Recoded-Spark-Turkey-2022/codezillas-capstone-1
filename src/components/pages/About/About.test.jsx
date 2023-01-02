import React from "react";
import renderer from "react-test-renderer";
import About from "./About";


it('Renders correctly for About Component', () => {
    const tree = renderer
    .create(<About />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
