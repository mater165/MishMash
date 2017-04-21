const WEEKDAYS = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];
const MONTHS = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

function zerofyTime(time) {
  return time < 10 ? '0' + time : time;
}

function getWeekday(weekday) {
  return WEEKDAYS[weekday];
}

function getMonth(month) {
  return MONTHS[month];
}

function getShortMonth(month) {
  return MONTHS_SHORT[month];
}

function getFullDateTime(date) {
  const datum = new Date(date);
  return datum.getDate() + ' ' + MONTHS[datum.getMonth()] + ' ' + datum.getFullYear() + ' ' + zerofyTime(datum.getHours()) + ':' + zerofyTime(datum.getMinutes()) + ':' + zerofyTime(datum.getSeconds());
}

function getSlashedDate(date) {
  return date.getFullYear() + '/' + zerofyTime(date.getMonth() + 1) + '/' + zerofyTime(date.getDate());
}

function getTextDate(date) {
  return getWeekday(date.getDay()) + ' ' + date.getDate() + ' ' + getMonth(date.getMonth());
}

function getTime(date) {
  return zerofyTime(date.getHours()) + ':' + zerofyTime(date.getMinutes()) + ':' + zerofyTime(date.getSeconds());
}

export {zerofyTime, getWeekday, getShortMonth, getMonth, getFullDateTime, getSlashedDate, getTextDate, getTime};