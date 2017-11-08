'use strict';

function MenuCtrl($log) {

  $log.log(
    'Hello from your Controller: MenuCtrl in module main:. This is your controller:',
    this);

}

MenuCtrl.$inject = ['$log'];

angular.module('main')
  .controller('MenuCtrl', MenuCtrl);
