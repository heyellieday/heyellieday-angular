'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elliecodesApp
 */
angular.module('Landing')
  .controller('ModalCtrl', function ($scope, $stateParams) {
    $scope.ids = [{
    	id: 1,
    	name: "Ellie",
    	bio: "Ellie is a coder and maker with a passion for using tech to help make tech more inclusive for all women through education, collaboration, and code.",
    	location: "Chicago, IL",
    	twitter: "http://twitter.com/heyellieday"
    	},

    ];
  });
