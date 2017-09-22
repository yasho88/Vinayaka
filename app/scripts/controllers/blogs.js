'use strict';

/**
 * @ngdoc function
 * @name vinayakApp.controller:BlogsCtrl
 * @description
 * # MainCtrl
 * Controller of the vinayakApp
 */
angular.module('vinayakApp')
  .controller('BlogsCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$http({
    method : "GET",
    url : "https://api.medium.com/v1/users/f71145a595fc/publications",
    headers: { 'Accept': 'application/json'
    }

  }).then(function mySuccess(response) {
      $scope.myWelcome = response.data;
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
  });
  });