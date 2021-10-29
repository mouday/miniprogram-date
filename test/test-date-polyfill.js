// 引入 Date polyfill
require('../src/date-polyfill.js');
const constant = require('../src/constant.js');

console.log(new Date().format('YYYY-MM-DD HH:mm:ss'));
// 2021-10-29 11:27:31

console.log(new Date().add(1, 'd').format(constant.DATETIME_STRING_FORMAT));
// 2021-10-29 11:27:31

console.log(new Date().subtract(1, 'd').format(constant.DATETIME_STRING_FORMAT));
// 2021-10-28 11:30:40

console.log(Date.fromString('2021-10-29 03:00:00'));
// 2021/10/29 03:00:00
