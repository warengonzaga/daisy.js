/** 
 * DaisyJS Demo Script
 * by Waren Gonzaga
 */

// in vanilla javascript

document.addEventListener('DOMContentLoaded', function () {
  daisyjs(document.getElementById('momoland'), {
    dotColor: '#000',
    lineColor: '#222'
  });
}, false);

// as jquery plugin

/* $(document).ready(function() {
  $('#momoland').daisyjs({
    dotColor: '#000',
    lineColor: '#222'
  });
}); */
