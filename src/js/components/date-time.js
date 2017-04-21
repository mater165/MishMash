import {dateUtils} from './../utilities';

//const MIN_60 = 3600000;
const MIN_15 = 900000;
//const MIN_1 = 60000;
const SEC_1 = 1000;

function showWelcome($welcome, date) {
  $welcome.innerText = 'God ' + (date.getHours() < 10 ? 'morgon' : date.getHours() < 12 ? 'förmiddag' : date.getHours() < 18 ? 'eftermiddag' : 'kväll') + ' Maria & Mattias';
  window.setTimeout(function() {
    showWelcome($welcome, new Date());
  }, MIN_15);
}

function showTime($time, date) {
  $time.innerText = dateUtils.getTime(date);
  window.setTimeout(function() {
    showTime($time, new Date());
  }, SEC_1);
}

function showDate($date, date) {
  $date.innerText = 'Idag är det ' + dateUtils.getTextDate(date);
  window.setTimeout(function() {
    showDate($date, new Date());
  }, SEC_1);
}

function showTimeDate($timeDate, date) {
  $timeDate.innerHTML = `<span class="">${dateUtils.getTime(date)}</span> <span class="">${dateUtils.getTextDate(date)}</span>`;
  window.setTimeout(function() {
    showTimeDate($timeDate, new Date());
  }, SEC_1);
}

class DateTime {
  constructor($dateTime) {
    this.$dateTime = $dateTime;
  }

  init() {
    if (this.$dateTime) {
      let $welcome = this.$dateTime.querySelector('.mn_js-welcome');
      if ($welcome) {
        showWelcome($welcome, new Date());
      }
      let $time = this.$dateTime.querySelector('.mn_js-time');
      if ($time) {
        showTime($time, new Date());
      }
      let $date = this.$dateTime.querySelector('.mn_js-date');
      if ($date) {
        showDate($date, new Date());
      }
      let $timeDate = this.$dateTime.querySelector('.mn_js-time-date');
      if ($timeDate) {
        showTimeDate($timeDate, new Date());
      }
    }
  }
}

export default DateTime;