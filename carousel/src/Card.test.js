import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card.js";

describe('Card', function() {
  test('renders without crashing', function() {
    render(<Card
      caption='test'
      src='test'
      currNum='test'
      totalNum='test'
    />);
  });

  test('matches initial snapshot', function() {
    const { container } = render(<Card
      caption='test'
      src='test'
      currNum='test'
      totalNum='test'
    />);
    expect(container).toMatchSnapshot();
  });
})