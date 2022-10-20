var app = angular.module("myApp", []);
app.controller("mcon", function ($scope) {
    $scope.count= 1;
    $scope.$watch('mydata.val',function(newVal) {
        // console.log('yea');
        $scope.count += 1;
        console.log($scope.count);
        if (newVal) {
            $scope.mydata_toolong = newVal.length > 15;
        }
    });
});
