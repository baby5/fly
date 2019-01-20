Page({
  data: {
    weekdayNames: ['一', '二', '三', '四', '五', '六', '日'],
    calendarRowNums: [0, 1, 2, 3, 4],
    calendarColNums: [0, 1, 2, 3, 4, 5, 6],
  },

  onLoad: function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    this.setData({ year: year, month: month + 1, day: date.getDate() })

    var dayNum = this._getDayNumOfMonth(year, month);
    var days = this._range(1, dayNum + 1);

    var fillNum = this._getFillNum(year, month);
    days = Array(fillNum).fill('').concat(days)
    this.setData({ days: days });
  },

  _getDayNumOfMonth: function (year, month) {
    return new Date(year, month + 1, 0).getDate();
  },

  _range: function (start, stop) {
    var list = [];
    for (let i = start; i < stop; i++) {
      list.push(i);
    }
    return list;
  },

  _getFillNum: function (year, month) {
    var date = new Date(year, month, 1)
    var weekday = date.getDay();  // Sunday - Saturday : 0 - 6
    var num = weekday - 1;
    if (num === -1) {  // is Sunday
      num = 6;
    }
    return num;
  },
})