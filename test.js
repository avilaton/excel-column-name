'use strict';
var assert = require('assert');
var intToExcelCol = require('./').intToExcelCol;
var excelColToInt = require('./').excelColToInt;

describe('intToExcelCol', function () {
	it('should convert column 1, 2 and 3 to A, B and C', function () {
		assert.strictEqual(intToExcelCol(1), 'A');
		assert.strictEqual(intToExcelCol(2), 'B');
		assert.strictEqual(intToExcelCol(3), 'C');
	});

	it('should convert column 24, 25 and 26 to X, Y and Z', function () {
		assert.strictEqual(intToExcelCol(24), 'X');
		assert.strictEqual(intToExcelCol(25), 'Y');
		assert.strictEqual(intToExcelCol(26), 'Z');
	});

	it('should convert column 27, 28 and 29 to AA, AB and AC', function () {
		assert.strictEqual(intToExcelCol(27), 'AA');
		assert.strictEqual(intToExcelCol(28), 'AB');
		assert.strictEqual(intToExcelCol(29), 'AC');
	});

	it('should convert column 52 and 53 to AZ and BA', function () {
		assert.strictEqual(intToExcelCol(52), 'AZ');
		assert.strictEqual(intToExcelCol(53), 'BA');
	});

	it('should convert column 286 and 287 to JZ and KA', function () {
		assert.strictEqual(intToExcelCol(286), 'JZ');
		assert.strictEqual(intToExcelCol(287), 'KA');
	});

	it('should convert column 702 and 703 to ZZ and AAA', function () {
		assert.strictEqual(intToExcelCol(702), 'ZZ');
		assert.strictEqual(intToExcelCol(703), 'AAA');
	});

	it('should convert column 832 and 833 to AEZ and AFA', function () {
		assert.strictEqual(intToExcelCol(832), 'AEZ');
		assert.strictEqual(intToExcelCol(833), 'AFA');
	});

});

describe('excelColToInt', function () {
	it('should convert A, B and C to 1, 2 and 3', function () {
		assert.strictEqual(excelColToInt('A'), 1);
		assert.strictEqual(excelColToInt('B'), 2);
		assert.strictEqual(excelColToInt('C'), 3);
	});

	it('should convert X, Y and Z to 24, 25 and, 26', function () {
		assert.strictEqual(excelColToInt('X'), 24);
		assert.strictEqual(excelColToInt('Y'), 25);
		assert.strictEqual(excelColToInt('Z'), 26);
	});

	it('should convert AA, AB and AC to 27, 28 and, 29', function () {
		assert.strictEqual(excelColToInt('AA'), 27);
		assert.strictEqual(excelColToInt('AB'), 28);
		assert.strictEqual(excelColToInt('AC'), 29);
	});

	it('should convert AZ, BA to 52, 53', function () {
		assert.strictEqual(excelColToInt('AZ'), 52);
		assert.strictEqual(excelColToInt('BA'), 53);
	});

	it('should convert JZ, KA to 286, 287', function () {
		assert.strictEqual(excelColToInt('JZ'), 286);
		assert.strictEqual(excelColToInt('KA'), 287);
	});

	it('should convert ZZ, AAA to 702, 703', function () {
		assert.strictEqual(excelColToInt('ZZ'), 702);
		assert.strictEqual(excelColToInt('AAA'), 703);
	});

	it('should convert AEZ, AFA to 832, 833', function () {
		assert.strictEqual(excelColToInt('AEZ'), 832);
		assert.strictEqual(excelColToInt('AFA'), 833);
	});
})