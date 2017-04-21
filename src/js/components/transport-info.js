//import {dateUtils} from './../utilities';
import { AjaxService } from './../services';

//const TIME_SPAN = 20;

function getHeadingHtml(text) {
  return `<h2 class="mn_mishmash__trans-item-heading">${text}</h2>`;
}

function getItemHtml(departure) {
  return `<div class="mn_mishmash__trans-item-content"><span>${departure.LineNumber}</span> <span>${departure.DisplayTime}</span> <span>${departure.Destination}</span></div>`;
}

function showBusesFromMoa($transMoa) {
  AjaxService.getPromise('http://10.0.1.11:8000/trans/moa', true)
    .then((response) => {
      console.log(JSON.parse(response));
      const departures = JSON.parse(response);
      let departureHtml = getHeadingHtml('Moa Martinssons Torg');
      departures.forEach(departure => { departureHtml += getItemHtml(departure); });
      $transMoa.innerHTML = departureHtml;
    }, (error) => {
      console.error('Failed!', error);
    });
  //window.setTimeout(showBusesFromMoa, MIN_60, $transMoa);
}

function showBusesFromEyvind($transEyvind) {
  AjaxService.getPromise('http://10.0.1.11:8000/trans/eyvind', true)
    .then((response) => {
      console.log(JSON.parse(response));
      const departures = JSON.parse(response).filter(departure => departure.Destination !== 'Fredhäll');
      let departureHtml = getHeadingHtml('Eyvind Johnssons Gata');
      departures.forEach(departure => { departureHtml += getItemHtml(departure); });
      $transEyvind.innerHTML = departureHtml;
    }, (error) => {
      console.error('Failed!', error);
    });
  //window.setTimeout(showBusesFromEyvind, MIN_60, $transEyvind);
}

function showMetrosFromStadshagen($transStadshagen) {
  AjaxService.getPromise('http://10.0.1.11:8000/trans/stadshagen', true)
    .then((response) => {
      console.log(JSON.parse(response));
      const departures = JSON.parse(response).filter(departure => departure.Destination === 'Kungsträdgården');
      let departureHtml = getHeadingHtml('Stadshagen');
      departures.forEach(departure => { departureHtml += getItemHtml(departure); });
      $transStadshagen.innerHTML = departureHtml;
    }, (error) => {
      console.error('Failed!', error);
    });
  //window.setTimeout(showMetrosFromStadshagen, MIN_60, $transStadshagen);
}

class TransportInfo {
  constructor($transInfo) {
    this.$transInfo = $transInfo;
  }

  init() {
    if (this.$transInfo) {
      let $transMoa = this.$transInfo.querySelector('.mn_js-trans-moa');
      if ($transMoa) {
        showBusesFromMoa($transMoa);
      }

      let $transEyvind = this.$transInfo.querySelector('.mn_js-trans-eyvind');
      if ($transEyvind) {
        showBusesFromEyvind($transEyvind);
      }

      let $transStadshagen = this.$transInfo.querySelector('.mn_js-trans-stadshagen');
      if ($transStadshagen) {
        showMetrosFromStadshagen($transStadshagen);
      }
    }
  }
}

export default TransportInfo;