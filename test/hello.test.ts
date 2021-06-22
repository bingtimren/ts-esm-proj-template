import { hello } from "../src/";
test("hello", () => {
  expect(typeof hello).toEqual("string");
});
