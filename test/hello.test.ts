import { greeting } from "../src";
test("hello", () => {
  const resultEn = greeting("John", "en");
  const resultFr = greeting("Alice", "fr");
  expect(resultEn).toMatch(/Hello.*John/);
  expect(resultFr).toMatch(/Bonjour.*Alice/);
});
