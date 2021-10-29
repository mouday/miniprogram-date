# miniprogram-date

实现一个简单的时间格式化和解析功能

如果需要更完善的功能可以考虑使用[Day.js](https://github.com/iamkun/dayjs),仅 2kB

安装

```
npm i miniprogram-date
```

## MiniDate 的使用

```js
const MiniDate = require('miniprogram-date');
const constant = require('miniprogram-date/src/constant.js');


// const MiniDate = require('../src/mini-date.js');
// const constant = require('../src/constant.js');

console.log(new MiniDate().format('YYYY-MM-DD HH:mm:ss'));
// 2021-10-29 11:27:31

console.log(new MiniDate().add(1, 'd').format(constant.DATETIME_STRING_FORMAT));
// 2021-10-29 11:27:31

console.log(
  new MiniDate().subtract(1, 'd').format(constant.DATETIME_STRING_FORMAT),
);
// 2021-10-28 11:30:40

console.log(MiniDate.fromString('2021-10-29 03:00:00'));
// MiniDate { date: '2021/10/29 03:00:00' }
```

## Date polyfill

```js
// 引入 Date polyfill
require('miniprogram-date/src/date-polyfill.js');
const constant = require('miniprogram-date/src/constant.js');

// require('../src/date-polyfill.js');
// const constant = require('../src/constant.js');

console.log(new Date().format('YYYY-MM-DD HH:mm:ss'));
// 2021-10-29 11:27:31

console.log(new Date().add(1, 'd').format(constant.DATETIME_STRING_FORMAT));
// 2021-10-29 11:27:31

console.log(
  new Date().subtract(1, 'd').format(constant.DATETIME_STRING_FORMAT),
);
// 2021-10-28 11:30:40

console.log(Date.fromString('2021-10-29 03:00:00'));
// 2021/10/29 03:00:00
```
