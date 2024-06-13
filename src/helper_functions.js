function isIdLengthValid(saIdNum) {
  return saIdNum.length === 13;
}

function hasNumericDigits(saIdNum) {
  return /^\d+$/.test(saIdNum);
}

function getMonth(saIdNum) {
  return parseInt(saIdNum.slice(2, 4), 10);
}

function isMonthValid(saIdNum) {
  return getMonth(saIdNum) >= 1 && getMonth(saIdNum) <= 12;
}

function isDayValid(saIdNum) {
  const year = parseInt(saIdNum.slice(0, 2), 10);
  const day = parseInt(saIdNum.slice(4, 6), 10);
  if (getMonth(saIdNum) === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return day >= 1 && day <= 29;
    } else {
      return day >= 1 && day <= 28;
    }
  }

  return day >= 1 && day <= 31;
}

function isCitizenStatusValid(saIdNum) {
  const citizenStatus = parseInt(saIdNum.slice(10, 11), 10);
  return citizenStatus === 0 || citizenStatus === 1;
}

function isChecksumValid(saIdNum) {
  const idDigits = saIdNum.split("").map(Number);
  const checksum = parseInt(saIdNum.charAt(12), 10);
  let total = 0;
  for (let i = 0; i < 12; i++) {
    let digit = idDigits[i];
    if (i % 2 !== 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    total += digit;
  }
  const calculatedChecksum = (10 - (total % 10)) % 10;
  return calculatedChecksum === checksum;
}

function isIdNumberAString(saIdNum) {
  if (typeof saIdNum !== "string") {
    throw new Error("ID number must be a string");
  }
}

module.exports = {
  isIdLengthValid,
  hasNumericDigits,
  isMonthValid,
  isDayValid,
  isCitizenStatusValid,
  isChecksumValid,
  isIdNumberAString,
};
