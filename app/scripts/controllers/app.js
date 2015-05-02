'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elliecodesApp
 */
angular.module('Landing')
  .controller('AppCtrl', function ($scope, $http) {
    $( ".thanks" ).hide();
    $scope.submitContact = function() {
      $http.post('https://heyellieday.herokuapp.com/entries', {
        first_name: $scope.first_name,
        last_name: $scope.last_name,
        email: $scope.email,
        message: $scope.message

      }); 
    };
    $scope.onSend = function(){
      $( ".sendMessage" ).hide();
      $( ".thanks" ).show();
    };

    $scope.showModal = function(id) {
        $('#portfolioModal'+id).modal('show');
    };

    $http.get('https://heyellieday.herokuapp.com/articles?username=heyellieday').
      success(function(data, status, headers, config) {
        $scope.user = data.user;
        $scope.posts = data.posts;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

  });
