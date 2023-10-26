import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//to make group of test case
describe("contact us Page test case", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  //assertion
});

test("Should load all input box inside contact us component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");
  //assertion
  console.log("len: ", inputBoxes.length);
  expect(inputBoxes.length).toBe(2);
});
