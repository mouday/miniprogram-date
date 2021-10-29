const MiniDate = require('../src/mini-date.js');
const constant = require('../src/constant.js');

console.log(new MiniDate().format('YYYY-MM-DD HH:mm:ss'));
// 2021-10-29 11:27:31

console.log(new MiniDate().add(1, 'd').format(constant.DATETIME_STRING_FORMAT));
// 2021-10-29 11:27:31

console.log(new MiniDate().subtract(1, 'd').format(constant.DATETIME_STRING_FORMAT));
// 2021-10-28 11:30:40

console.log(MiniDate.fromString('2021-10-29 03:00:00'));
// MiniDate { date: '2021/10/29 03:00:00' }
