const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("deals with errors", () => {
    it("returns false if the substitution alphabet is not 26 characters", () => {
      const input = "message";
      const alphabet = "short";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("returns false if the substitution alphabet has duplicate characters", () => {
      const input = "message";
      const alphabet = "aabbccddee";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("correctly translates a given phrase using the substitution alphabet", () => {
      const input = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(input, alphabet);
      const expected = "ykrrpik";
      expect(actual).to.equal(expected);
    });
    describe("it maintains spaces:", () => {
      it("maintains spaces: in the given message", () => {
        const input = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet);
        const expected = "yp ysii.rs";

        expect(actual).to.equal(expected);
      });
      it("maintains spaces: does not add extra space before or after message", () => {
        const input = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet);
        const expected = "ysii.rs";

        expect(actual).to.equal(expected);
      });
    });
    describe("it ignores capital letters: Message and message return the same result", () => {
      it("result of Message", () => {
        const input = "Message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet);
        const expected = "ysii.rs";

        expect(actual).to.equal(expected);
      });
      it("result of message", () => {
        const input = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet);
        const expected = "ysii.rs";

        expect(actual).to.equal(expected);
      });
    });
  });
  describe("decoding a message", () => {
    it("correctly translates a given phrase using the substitution alphabet", () => {
      const input = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(input, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
    describe("it maintains spaces:", () => {
      it("maintains spaces: in the given message", () => {
        const input = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, false);
        const expected = "my message";

        expect(actual).to.equal(expected);
      });
      it("maintains spaces: does not add space before or after given message", () => {
        const input = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, false);
        const expected = "message";

        expect(actual).to.equal(expected);
      });
    });
    describe("it ignores capital letters", () => {
      it("result of Ysii.rs", () => {
        const input = "Ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, false);
        const expected = "message";

        expect(actual).to.equal(expected);
      });
      it("result of yysii.rs", () => {
        const input = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, false);
        const expected = "message";

        expect(actual).to.equal(expected);
      });
    });
  });
});
