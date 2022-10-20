var app = angular.module("myApp", []);
app.controller("mcon", function ($scope) {
    $scope.num=0;
    $scope.nums=[];
    $scope.increment= function() {
        $scope.num++;
    }
    $scope.breakit=$scope.$watch('num',function() {
        $scope.nums.push($scope.num)
    })
});
