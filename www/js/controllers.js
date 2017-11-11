angular.module('starter.controllers', [])

.controller('KalkulatorCtrl', function($scope) {

$scope.add=function(num1,num2){
  if (num1 > 0 && num2 > 0 ){
      $scope.result=num1+num2;
  }
}

});
