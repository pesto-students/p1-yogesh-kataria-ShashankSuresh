const { sum, diff, product } = Require("./mathOperations");

test("sum test - 2 + 2 = 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("diff test - 15 - 7 = 8", () => {
  expect(diff(15, 7)).toBe(8);
});

test("product test - 13 * 3 = 39", () => {
  expect(product(13, 3)).toBe(39);
});
