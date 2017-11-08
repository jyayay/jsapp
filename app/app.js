'use strict';
angular.module('jsapp', [
  'gettext',
  'main',
  'main.user',
  'main.devices',
  'ls.LiveSet',
  'ls.ChangeStream',
  'ngCookies',
  'angular-lodash',
])
  .config(['$logProvider', function ($logProvider) {
    $logProvider.debugEnabled(true);
  }])
  .run(['gettextCatalog', function (gettextCatalog) {
    gettextCatalog.currentLanguage = 'zh_CN';
  }]);
  // .run(['$log', '$rootScope', '$state', function ($log, $rootScope, $state) {
  //   $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
  //     $log.debug('To state: ', toState);
  //     if (toState.authenticate) {
  //       event.preventDefault();
  //       $state.transitionTo('main.user.login');
  //     }
  //   });
  // }]);
