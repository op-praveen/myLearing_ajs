var app = angular.module("myApp", []);
app.controller("mcon", function ($scope,$filter) {
  $scope.mydata = { arr: ["mike", "jake", "test"] };
  $scope.mydata2 = {
    arr: [
      { name: "test", age: 34, class: "highschool" },
      { name: "user2", age: 22, class: "middleschool" },
      { name: "user5", age: 21, class: "middleschool" },
    ],
  };
  console.log($filter('uppercase')('testing'));;
});
