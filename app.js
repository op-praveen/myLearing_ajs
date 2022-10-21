var app = angular.module("myApp", []);
app.controller("mcon", function ($scope,myFact) {
    console.log(myFact.getdata());
});
app.factory("myFact",function(){
    var mydata = "this is my data";
    return {
        getdata:function(){
            return mydata;
        }
    }
})