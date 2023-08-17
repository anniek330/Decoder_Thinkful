const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius ()", () => {
  describe("encoding a message", () => {
    it("should translate 'i' and 'j' to 42", () => {
      const input = "jiggle";
      const actual = polybius(input);
      const expected = "424222221351";

      expect(actual).to.equal(expected);
    });
    describe("maintains spaces", () => {
      it("maintains spaces: in the message", () => {
        const input = "my message";
        const actual = polybius(input);
        const expected = "2345 23513434112251";

        expect(actual).to.equal(expected);
      });
      it("maintains spaces: does not add space before or after the message", () => {
        const input = "my message";
        const actual = polybius(input);
        const expected = "2345 23513434112251";

        expect(actual).to.equal(expected);
      });
    });
    describe("ignores capital letters: result of Message and message are the same", () => {
      it("ignores capital letters: result of Message)", () => {
        const input = "message";
        const actual = polybius(input);
        const expected = "23513434112251";

        expect(actual).to.equal(expected);
      });
      it("ignores capital letters: result of message)", () => {
        const input = "message";
        const actual = polybius(input);
        const expected = "23513434112251";

        expect(actual).to.equal(expected);
      });
    });
  });

  describe("decoding a message", () => {
    it("should translate 42 to both 'i' and 'j'", () => {
      const input = "424222221351";
      const actual = polybius(input, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });
    describe("maintains spaces", () => {
      it("maintains spaces: in the message", () => {
        const input = "2345 23513434112251";
        const actual = polybius(input, false);
        const expected = "my message";

        expect(actual).to.equal(expected);
      });
      it("maintains spaces: does not add space before or after the message", () => {
        const input = "2345 23513434112251";
        const actual = polybius(input, false);
        const expected = "my message";

        expect(actual).to.equal(expected);
      });
    });
  });
});
