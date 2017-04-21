import { dateUtils } from './../utilities';
import { AjaxService } from './../services';

//const MIN_60 = 3600000;
const MIN_15 = 900000;
//const MIN_1 = 60000;
const SEC_1 = 1000;

function showDateName($dateName, data) {
  $dateName.innerHTML = `Idag har ${data.dagar[0].namnsdag.join(' och ')} namnsdag`;
}

function getDateInfo(callback, $element) {
  AjaxService.getPromise('http://api.dryg.net/dagar/v2.1/' + dateUtils.getSlashedDate(new Date()))
    .then((response) => {
      console.log(JSON.parse(response));
      callback($element, JSON.parse(response));
      //showNameDay($dateInfo.querySelector('.mn_js-name-day'), jsonData.dagar[0].namnsdag);
    }, (error) => {
      console.error('Failed!', error);
    });
  //window.setTimeout(getDateInfo, MIN_60);
}

function showWelcome($welcome, date) {
  $welcome.innerText = 'God ' + (date.getHours() < 10 ? 'morgon' : date.getHours() < 12 ? 'förmiddag' : date.getHours() < 18 ? 'eftermiddag' : 'kväll') + ' Maria & Mattias';
  window.setTimeout(function () {
    showWelcome($welcome, new Date());
  }, MIN_15);
}

function showTime($time, date) {
  $time.innerText = dateUtils.getTime(date);
  window.setTimeout(function () {
    showTime($time, new Date());
  }, SEC_1);
}

function showDate($date, date) {
  $date.innerText = 'Idag är det ' + dateUtils.getTextDate(date);
  window.setTimeout(function () {
    showDate($date, new Date());
  }, SEC_1);
}

function showTimeDate($timeDate, date) {
  $timeDate.innerHTML = `<span class="">${dateUtils.getTime(date)}</span> <span class="">${dateUtils.getTextDate(date)}</span>`;
  window.setTimeout(function () {
    showTimeDate($timeDate, new Date());
  }, SEC_1);
}

class DateInfo {
  constructor($dateInfo) {
    this.$dateInfo = $dateInfo;
  }

  init() {
    if (this.$dateInfo) {
      //const dateInfo = getDateInfo();
      let $welcome = this.$dateInfo.querySelector('.mn_js-welcome');
      if ($welcome) {
        showWelcome($welcome, new Date());
      }
      let $dateName = this.$dateInfo.querySelector('.mn_js-date-name');
      if ($dateName) {
        getDateInfo(showDateName, $dateName);
      }
      let $time = this.$dateInfo.querySelector('.mn_js-time');
      if ($time) {
        showTime($time, new Date());
      }
      let $date = this.$dateInfo.querySelector('.mn_js-date');
      if ($date) {
        showDate($date, new Date());
      }
      let $timeDate = this.$dateInfo.querySelector('.mn_js-time-date');
      if ($timeDate) {
        showTimeDate($timeDate, new Date());
      }
    }
  }
}

export default DateInfo;