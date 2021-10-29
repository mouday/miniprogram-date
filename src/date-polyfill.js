const MiniDate = require('./mini-date.js');

Date.prototype.format = function (fmt) {
  return new MiniDate(this).format(fmt);
};

Date.prototype.add = function (num, unit = 'd') {
  return new MiniDate(this).add(num, unit).toDate();
};

Date.prototype.subtract = function (num, unit) {
  return new MiniDate(this).subtract(num, unit).toDate();
};

Date.fromString = function (str) {
  return MiniDate.fromString(str).toDate();
};
