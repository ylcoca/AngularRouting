'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            // route for the home page
                templateUrl: 'pages/home.html',
                controller: 'homeController'
            })
            .when('/home', {
                // route for the home page
                templateUrl: 'pages/home.html',
                controller: 'homeController'
            })
            .when('/about', {
            // route for the about page
                templateUrl: 'pages/about.html',
                controller: 'aboutController'
            })
            // route for the contact page
            .when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            })
            // route for the contact page with subject param
            .when('/contact/:subject', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            })
            .otherwise({
            // when all else fails
                templateUrl: 'pages/routeNotFound.html',
                controller: 'notFoundController'
            });

        console.log($routeProvider);
    }]);

app.controller('homeController', function ($scope) {
    $scope.message = 'Welcome to my home page!';
});
app.controller('aboutController', function ($scope) {
    $scope.message = 'Find out more about me.';
});
app.controller('contactController', function ($scope, $routeParams) {
    var subject = '';
    if ($routeParams ['subject'] == "learn") {
        subject = 'I want to learn more about your services';
    } else if ($routeParams ['subject'] == "quote") {
        subject = 'I would like to get a free quote';
    }
    $scope.subject = subject;
});
/*app.controller('notFoundController',['$location', function ($scope,$location) {

    $scope.message = 'There seems to be a problem finding the page you wanted';
    $scope.attemptedPath = $location.path();
}]);*/

app.controller('notFoundController', ['$scope', '$location',

    function ($scope, $location) {

        $scope.message = 'There seems to be a problem finding the page you wanted';
        $scope.attemptedPath = $location.path();
    }]);