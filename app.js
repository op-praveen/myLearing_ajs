angular.module("myApp", []).controller("mcon", function ($scope) {
  $scope.val2 = 1;
  $scope.even = false;
  $scope.test = function () {
    $scope.val2 += 1;
    $scope.even = $scope.val2 % 2 == 0;
  };
});
