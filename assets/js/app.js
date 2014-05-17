/*!
 Author: Fernando Porazzi - github.com/fernandoporazzi
*/

;(function(w, d, undefined){

  'use strict';

  var Operadora = (function(){

    var _doRequest = function () {

      var phoneNumber = d.querySelector('#main__form-phone').value,
          xhr = new XMLHttpRequest();

      xhr.open('GET', 'http://qualoperadora.herokuapp.com/consulta/' + phoneNumber, true);

      xhr.onload = function () {
        
        var data = JSON.parse(xhr.responseText);

        if (data) {

          d.querySelector('#resp-content').innerHTML = data.operadora;
          d.querySelector('#resp').classList.add('show');

        } else {

          d.querySelector('#resp').innerHTML = 'Não encontramos nenhum registro';
        
        }

      };

      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send();

    };


    var _bindSubmit = function () {

      var form = d.querySelector('#main__form');

      form.addEventListener('submit', function (e) {
        
        e.preventDefault();

        _doRequest();

      }, false);

    };

    var _bindInputFocus = function () {
      
      var input = d.querySelector('#main__form-phone');

      // hide resp when the keybord goes into the screen
      input.addEventListener('focus', function () {
        d.querySelector('#resp').classList.remove('show');
      }, false);

    };

    var _init = function () {
      _bindSubmit();
      _bindInputFocus();
    };

    return {
      init: _init
    };

  })();

  Operadora.init();

})(window, document);