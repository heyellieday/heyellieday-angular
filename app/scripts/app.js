'use strict';

/**
 * @ngdoc overview
 * @name elliecodesApp
 * @description
 * # elliecodesApp
 *
 * Main module of the application.
 */
var app = angular
  .module('Landing', ['ui.router', 'ng-token-auth']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $authProvider.configure({
            apiUrl: ''
  });

});
