'use strict';
angular.module('main.devices', [])
  .config(['$stateProvider', function ($stateProvider) {

    $stateProvider
      .state('main.devices', {
        url: '/devices',
        abstract: true,
        template: '<ion-view><ion-nav-view></ion-nav-view></ion-view>',
        authenticate: true
      })
      .state('main.devices.list', {
        url: '/',
        templateUrl: 'devices/templates/device-list.html',
        controller: 'DeviceListCtrl as deviceList',
        authenticate: true
      });
  }]);
