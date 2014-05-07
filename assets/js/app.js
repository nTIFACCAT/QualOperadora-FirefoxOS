/*!
 Author: Fernando Porazzi - github.com/fernandoporazzi
*/

;(function(w, d, undefined){

  'use strict';

  var Operadora = (function(){

    var _doRequest = function () {

      var phoneNumber = d.querySelector('#main__form-phone').value,
          xhr = new XMLHttpRequest();

      // Since I am passing through some cross-domains problems, I've build a Mock to simulate te original behavior
      //xhr.open('GET', 'http://private-61fc-rodrigoknascimento.apiary-mock.com/consulta/5199999999', true);

      xhr.open('GET', './', true);

      xhr.onload = function () {
        //console.log(xhr.responseText);

        // mock =/
        var data = JSON.parse('{"telefone": "(51) 9999-9999","operadora": "Vivo - Celular","estado": "Rio Grande do Sul","portabilidade": false}');

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