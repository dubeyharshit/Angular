/**
 * Created by Harshit on 4/15/2016.
 */
///<reference path = "angular.min.js" />
var myApp= angular.module("myModule",[]).controller("myController",function($scope)
{
    var technologies = [
        {course:"c#",likes:"0",dislikes:"0"},
        {course:".net",likes:"0",dislikes:"0"}
]
    $scope.technologies = technologies;

    $scope.likes = function(technology)
    {
        technology.likes++;
    }
    $scope.dislikes = function(technology)
    {
        technology.dislikes++;
    }
});

