# excel-column-name [![Build Status](https://travis-ci.org/avilaton/excel-column-name.svg?branch=master)](https://travis-ci.org/avilaton/excel-column-name)

> Converts one based index to Excel column name and back


## Install

```
$ npm install --save excel-column-name
```


## Usage

```js
var excelColumnName = require('excel-column-name');

excelColumnName.intToExcelCol(287) == 'KA';
excelColumnName.excelColToInt('KA') == 287;
```


## API

### intToExcelCol(number)

#### number

**Required**  
Type: `integer`


### excelColToInt(columnName)

#### columnName

**Required**  
Type: `string`
