'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elliecodesApp
 */
angular.module('Landing')
  .controller('AppCtrl', function ($scope, $auth) {
    $( ".thanks" ).hide();
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) { 
          // handle success response
        })
        .catch(function(resp) { 
          // handle error response
        });
    };
    $scope.onSend = function(){
       $( ".sendMessage" ).hide();
      $( ".thanks" ).show();
    }

  });
