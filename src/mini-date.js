/**
 * MiniDate js简单的时间处理工具
 * 接口实现参考 moment.js
 */

class MiniDate {
  /**
   * 实例化，支持：Date/null
   * @param {Date|null} date
   */
  constructor(date = null) {
    this.date = date || new Date();
  }

  /**
   * Date时间格式化
   * @param {Date} date
   * @param {String} fmt eg: YYYY-MM-DD HH:mm:ss
   * @returns {String}
   * ref:
   * - https://blog.csdn.net/meizz/article/details/405708
   * - https://developers.weixin.qq.com/community/develop/article/doc/000a42a8940548ac296a1480258413
   */
  format(fmt) {
    const o = {
      'M+': this.date.getMonth() + 1,
      'D+': this.date.getDate(),
      'H+': this.date.getHours(),
      'm+': this.date.getMinutes(),
      's+': this.date.getSeconds(),
      'q+': Math.floor((this.date.getMonth() + 3) / 3),
      S: this.date.getMilliseconds(),
    };
    if (/(Y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (this.date.getFullYear() + '').substr(4 - RegExp.$1.length),
      );
    for (let k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr((o[k] + '').length),
        );
    return fmt;
  }

  /**
   * 增加时间
   * @param {Date} date
   * @param {Number} num
   * @param {String} unit enum: y,M,d,h,m,s
   * @returns {Date}
   */
  add(num, unit = 'd') {
    const s = 1000,
      m = s * 60,
      h = m * 60,
      d = h * 24,
      M = d * 30,
      y = M * 12;

    const obj = { s, m, h, d, M, y };

    if (!Object.keys(obj).includes(unit)) {
      throw new Error(`Invalid param unit`);
    }

    return new MiniDate(new Date(this.date.getTime() + num * obj[unit]));
  }
  /**
   * 减少时间
   * @param {Date} date
   * @param {Number} num
   * @param {String} unit  enum: y,M,d,h,m,s
   * @returns {Date}
   */
  subtract(num, unit = 'd') {
    return this.add(-num, unit);
  }

  /**
   * 解析字符串格式的，兼容ios和android
   * bug: https://developers.weixin.qq.com/community/develop/doc/000aac01b3483047bbd6f15a75ec00
   * @param {Date} date
   * @param {String} str
   * @returns
   */
  static fromString(str) {
    return new MiniDate(str.replace(/\-/g, '/'));
  }

  toDate() {
    return this.date;
  }
}

module.exports = MiniDate;
