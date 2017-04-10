import { AjaxService } from './../services';

function showWelcome($welcome) {
  const hours = new Date().getHours;
  $welcome.innerText = 'God ' + (hours < 12 ? 'morgon' : hours < 18 ? 'eftermiddag' : 'kväll');
}

function showNameDay($nameDay, namedayJson) {
  namedayJson.forEach(namn => {
    $nameDay.innerText += namn + ', ';
  });
}

class DateInfo {
  constructor($dateInfo) {
    this.$dateInfo = $dateInfo;
  }

  init() {
    if (this.$dateInfo) {
      this._getDateInfo(this.$dateInfo);
    }
  }

  _getDateInfo($dateInfo) {
    let jsonData;
    AjaxService.getPromise('http://api.dryg.net/dagar/v2.1/2017/04/06').then((response) => {
      console.log(JSON.parse(response));
      const jsonData = JSON.parse(response);
      showWelcome($dateInfo.querySelector('.mn_js-welcome'));
      showNameDay($dateInfo.querySelector('.mn_js-name-day'), jsonData.dagar[0].namnsdag);
    }, (error) => {
      console.error('Failed!', error);
    });
    return jsonData;
  }
}

export default DateInfo;