var app = angular.module("myApp", []);
app.controller("mcon", function ($scope,$filter) {
  $scope.mydata2 = {
    arr: [
      { name: "test", age: 34, class: "highschool" },
      { name: "user2", age: 22, class: "middleschool" },
      { name: "user5", age: 21, class: "middleschool" },
    ],
  };
});
app.filter('charlimit',function() {
    return function(input, length) {
        if (!length) {
            length=10;
        }
        if (!input) {
            return "";
        }
        if (input.length<=length) {
            return input;
        }else{
            return input.substring(0,length)+'....';
        }
    }
})

app.filter('candrink',function() {
    return function(data,minage) {
        var filtered = [];
        if (!minage) {
            minage=21;
        }
        for (let i = 0; i < data.length; i++) {
            const value = data[i];
            if (value.age>=minage) {
                filtered.push(value);
            }
        }
        return filtered;
    }
})