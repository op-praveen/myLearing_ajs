var app = angular.module("myApp", []);
app.controller("mcon", function ($scope) {
    $scope.mydata = {arr:["mike","jake","test"]}
    $scope.mydata2 = {arr:[{name:"test",age:34,class:'highschool'}]};
});
