'use strict';

exports.intToExcelCol = function (number) {
  var colName = '',
    dividend = Math.floor(Math.abs(number)),
    rest;

  while (dividend > 0) {
    rest = (dividend - 1) % 26;
    colName = String.fromCharCode(65 + rest) + colName;
    dividend = parseInt((dividend - rest)/26);
  }
  return colName;
};


exports.excelColToInt = function (colName) {
  var digits = colName.toUpperCase().split(''),
    number = 0;

  for (var i = 0; i < digits.length; i++) {
    number += (digits[i].charCodeAt(0) - 64)*Math.pow(26, digits.length - i - 1)
  };

  return number;    
};
