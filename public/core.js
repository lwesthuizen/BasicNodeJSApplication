angular.module('testApp', [])
  .controller('testController', function($scope, $http) {
    $scope.num1 = "";
    $scope.num2 = "";
    $scope.requestSummationResponse = "";

    $scope.requestSummation = function(){
      $http({
        url: "http://localhost:8080",
        method: "POST",
        data: {"num1": $scope.num1, "num2": $scope.num2},
      })
      .then(
        function(response){$scope.requestSummationResponse = response.data.answer},
        function(response){console.log("Error occured!")}
      );
    }
  });
