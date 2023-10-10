import strictEquals from "./strictEquals";

describe("Given a strictEqual function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const result = true;

      const hasEqualValue = strictEquals(valueA, valueB);

      expect(hasEqualValue).toBe(result);
    });
  });
});
