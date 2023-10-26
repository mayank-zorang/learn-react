import { sum } from "../sum";

test("function for sum of two numbers", () => {
  const result = sum(6, 4);

  //Assertion
  expect(result).toBe(10);
});
