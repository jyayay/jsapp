'use strict';
angular.module('main.user', [
  // TODO: load other modules selected during generation
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/user/login');
  $stateProvider
  // this state is placed in the <ion-nav-view> in the main/templates/menu.html
    .state('main.user', {
      url: '/user',
      abstract: true,
      controller: 'UserCtrl as user',
      template: '<ion-view><ion-nav-view></ion-nav-view></ion-view>'
    })
      .state('main.user.signup', {
        url: '/signup',
        templateUrl: 'user/templates/signup.html',
      })
      .state('main.user.login', {
        url: '/login',
        templateUrl: 'user/templates/login.html',
      });
}]);
