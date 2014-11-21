'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elliecodesApp
 */
angular.module('Landing')
  .controller('ModalIconCtrl', function ($scope, $stateParams) {
    $scope.rowsOfOrgs = [
        [
            {
                id: 1,
                title: "Women of Code",
                url: "images/womenofcode.jpg"
            },
            {
                id: 2,
                title: "TransTech",
                url: "images/transtech.jpg"
            },
            {
                id: 3,
                title: "mRelief",
                url: "images/mrelief.jpg"
            }
        ],
        [
            {
                id: 4,
                title: "Viable Framework",
                url: "images/viable.jpg"
            }

        ],

    ];
  });
