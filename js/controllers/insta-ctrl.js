(function() {

  angular.module("instagram")
  .controller("InstaCtrl", InstaCtrl);

  InstaCtrl.$inject = [
    '$scope', '$http'
  ];

  function InstaCtrl($scope, $http) {
    $http.get('/imgs.json').success(
      function(data) {
        $scope.imgs =  data;
      }
    );
  }

})();
