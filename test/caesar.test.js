const { expect } = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar()", () => {
  describe("dealing with errors", () => {
    it("returns false if the shift value is equal to 0", () => {
      const input = "testing value";
      const shift = 0;
      const actual = caesar(input, shift);

      expect(actual).to.be.false;
    });
    it(" return false if the shift value is less than -25", () => {
      const input = "testing value";
      const shift = -30;
      const actual = caesar(input, shift);

      expect(actual).to.be.false;
    });
    it("returns false is the shift value is greater than 25", () => {
      const input = "testing value";
      const shift = 30;
      const actual = caesar(input, shift);

      expect(actual).to.be.false;
    });
    it(" returns false is the shift value is not present", () => {
      const input = "testing value";
      const actual = caesar(input);

      expect(actual).to.be.false;
    });
  });
  describe("Dealing with capital letters: Message and message should have the same result", () => {
    it("It ignores capital letters: result from (Message)", () => {
      const input = "Message";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "phvvdjh";
      expect(actual).to.equal(expected);
    });
    it("result from (message)", () => {
      const input = "message";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "phvvdjh";
      expect(actual).to.equal(expected);
    });
  });
  describe("Handles shifts that go past the end of the alphabet when encoding.", () => {
    it("it wraps around the alphabet when a positive shift  goes past letter z", () => {
      const input = "zebra magazine";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "cheud pdjdclqh";
      expect(actual).to.equal(expected);
    });
    it("it wraps around the alphabet when a negative shift goes past letter a", () => {
      const input = "zebra magazine";
      const shift = -3;
      const actual = caesar(input, shift);
      const expected = "wbyox jxdxwfkb";
      expect(actual).to.equal(expected);
    });
  });
  describe("It maintains spaces and other nonalphabetic symbols in the message: before and after encoding or decoding", () => {
    describe("encoding", () => {
      it("it maintains spaces in the message", () => {
        const input = "a message";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "d phvvdjh";
        expect(actual).to.equal(expected);
      });
      it(" it maintains other nonalphabetic symbols in the message", () => {
        const input = "message!";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "phvvdjh!";
        expect(actual).to.equal(expected);
      });
    });
    describe("decoding", () => {
      it("it maintains spaces in the message", () => {
        const input = "d phvvdjh";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "a message";
        expect(actual).to.equal(expected);
      });
      it(" it maintains other nonalphabetic symbols in the message", () => {
        const input = "phvvdjh!";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "message!";
        expect(actual).to.equal(expected);
      });
    });
  });
});
