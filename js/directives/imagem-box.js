(function() {
  'use strict';

  angular.module('instagram')
  .directive('imagemBox', imagemBox);

  function imagemBox() {
    return {
      templateUrl: 'views/imagem-box.html'
    };
  }

})();
