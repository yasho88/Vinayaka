'use strict';

/**
 * @ngdoc overview
 * @name vinayakApp
 * @description
 * # vinayakApp
 *
 * Main module of the application.
 */
var vapp = angular
  .module('vinayakApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  
  vapp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl',
        controllerAs: 'books'
      })
      .when('/blogs', {
        templateUrl: 'views/blogs.html',
        controller: 'BlogsCtrl',
        controllerAs: 'blogs'
      })
      .when('/recommendation', {
        templateUrl: 'views/recommendation.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix(''); 
  }]);
