const {
  isIdLengthValid,
  hasNumericDigits,
  isMonthValid,
  isDayValid,
  isCitizenStatusValid,
  isChecksumValid,
  isIdNumberAString,
} = require("./helper_functions");

function isIdNumberValid(saIdNum) {
  isIdNumberAString(saIdNum);

  if (
    !isIdLengthValid(saIdNum) ||
    !hasNumericDigits(saIdNum) ||
    !isMonthValid(saIdNum) ||
    !isDayValid(saIdNum) ||
    !isCitizenStatusValid(saIdNum) ||
    !isChecksumValid(saIdNum)
  ) {
    return false;
  }

  return true;
}

module.exports = { isIdNumberValid };
