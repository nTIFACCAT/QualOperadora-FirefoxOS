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
          var tree = '';

          tree += '<p><span>Número:</span> ' + data.telefone + '</p>';
          tree += '<p><span>Operadora:</span> ' + data.operadora + '</p>';
          tree += '<p><span>Portabilidade:</span> ' + data.portabilidade === true ? 'Sim' : 'Não' + '</p>';
          tree += '<p><span>Estado:</span> ' + data.estado + '</p>';

          d.querySelector('#resp').innerHTML = tree;
        } else {
          d.querySelector('#resp').innerHTML = 'Não encontramos nenhum registro';
        }

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