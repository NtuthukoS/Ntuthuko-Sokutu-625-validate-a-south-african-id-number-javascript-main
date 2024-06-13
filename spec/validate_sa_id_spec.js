const { isIdNumberValid } = require("../src/validate_sa_id");

describe("South African ID Number Validator", () => {
  it("should return true for valid ID numbers", () => {
    expect(isIdNumberValid("2001014800086")).toBe(true);
  });

  it("should return false for ID numbers that are too short", () => {
    expect(isIdNumberValid("200101480008")).toBe(false);
  });

  it("should return false for ID numbers that are too long", () => {
    expect(isIdNumberValid("20010148000865")).toBe(false);
  });

  it("should return false for ID numbers with non-numeric characters", () => {
    expect(isIdNumberValid("20010A4800086")).toBe(false);
  });

  it("should return false for invalid citizen status", () => {
    expect(isIdNumberValid("2001014800387")).toBe(false);
  });

  it("should return false for ID numbers with an invalid checksum", () => {
    expect(isIdNumberValid("2001014800081")).toBe(false);
  });

  it("should return false for an invalid month", () => {
    expect(isIdNumberValid("2013134800086")).toBe(false);
  });

  it("should return false for an invalid day", () => {
    expect(isIdNumberValid("2001323200086")).toBe(false);
  });

  it("should return false for a valid ID number with February 29 in a non-leap year", () => {
    expect(isIdNumberValid("2102294800087")).toBe(false);
  });

  it("should return true for a valid ID number in a leap year", () => {
    expect(isIdNumberValid("2402294800087")).toBe(true);
  });

  it("should throw an error for a non-string input", () => {
    expect(() => isIdNumberValid(2001014800086)).toThrowError(
      "ID number must be a string"
    );
  });
});
