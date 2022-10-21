var app = angular.module("myApp", []);
app.controller("mcon", function ($scope,twitterApi, valService) {
    // twitterApi.url="test";
    console.log(twitterApi.url,valService);
});
app.constant("twitterApi",{url:"api.twitter.com"});
app.value("valService",function() {return "this is return from a fn"});