'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elliecodesApp
 */
angular.module('Landing')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
