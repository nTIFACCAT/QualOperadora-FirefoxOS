/*!
 Author: Fernando Porazzi - github.com/fernandoporazzi
*/

;(function(w, d, undefined){

  'use strict';

  var Operadora = (function(){

    var _doRequest = function () {

      var phoneNumber = d.querySelector('#main__form-phone').value,
          xhr = new XMLHttpRequest();

      xhr.open('GET', 'http://private-61fc-rodrigoknascimento.apiary-mock.com/consulta/5199999999', true);

      xhr.onload = function () {
        console.log(xhr.responseText);
      };

      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send();
    };


    var _bindSubmit = function () {
      //http://private-61fc-rodrigoknascimento.apiary-mock.com/consulta/5199999999

      var form = d.querySelector('#main__form');

      form.addEventListener('submit', function (e) {
        
        e.preventDefault();

        _doRequest();

      }, false);

    };

    return {
      init: _bindSubmit
    };

  })();

  Operadora.init();

})(window, document);