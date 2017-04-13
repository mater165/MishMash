//const MIN_60 = 3600000;
const MIN_15 = 900000;
//const MIN_1 = 60000;

function showWelcome($welcome) {
  let hours = new Date().getHours();
  $welcome.innerText = 'God ' + (hours < 12 ? 'morgon' : hours < 18 ? 'eftermiddag' : 'kväll') + ' Maria & Mattias';
  hours = null;
  window.setTimeout(showWelcome, MIN_15, [$welcome]);
}

class DateTime {
  constructor($dateTime) {
    this.$dateTime = $dateTime;
  }

  init() {
    if (this.$dateTime) {
      this.$welcome = this.$dateTime.querySelector('.mn_js-welcome');
      if (this.$welcome) {
        showWelcome(this.$welcome);
      }
    }
  }
}

export default DateTime;