import {components, utilities} from './../src/js';
require('./main.scss');
const {qs, qsAll} = utilities;

//Print
components.Print.init();

//Date Info
[].forEach.call(
    document.querySelectorAll('.mn_js-date-time'), 
    $dateTime => new components.DateTime($dateTime).init());

//Date Info
[].forEach.call(
    document.querySelectorAll('.mn_js-date-info'), 
    $dateInfo => new components.DateInfo($dateInfo).init());