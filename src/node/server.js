'use strict';

let express = require('express');
var cors = require('cors')
let SL = require('sl-api');
let app = express();

const API_KEY_PLATSUPPSLAG = 'e5e4d902934a4561a2bcf0681a3ffac9';
//const API_KEY_REALTID = 'a6e35d2dfcac4d9e8c962f67953089be';
const API_KEY_REALTID = 'c32f3e95fb994c15b025d9e0fafd7a89';

app.use(cors());

const slWrapper = new SL({
  realtimeInformation: API_KEY_REALTID,
  locationLookup: API_KEY_PLATSUPPSLAG
});

app.get('/trans/moa', function (req, res) {
  console.log('Get buses for Moa Martinssons Torg');
  slWrapper.realtimeInformation({ siteid: 1251 })
    .then(data => {
      console.log('Bus information is returned');
      return res.send(data['Buses']);
    })
    .fail(err => res.send(err));
});

app.get('/trans/eyvind', function (req, res) {
  console.log('Get buses for Eyvind Johnssons Gata');
  slWrapper.realtimeInformation({ siteid: 1254 })
    .then(data => {
      console.log('Bus information is returned');
      return res.send(data['Buses']);
    })
    .fail(err => res.send(err));
});

app.get('/trans/stadshagen', function (req, res) {
  console.log('Get metros for Stadshagen');
  slWrapper.realtimeInformation({ siteid: 9307 })
    .then(data => {
      console.log('Metro information is returned');
      return res.send(data['Metros']);
    })
    .fail(err => res.send(err));
});

app.listen(8000, function () {
  console.log('Server started and listens at port 8000');
});