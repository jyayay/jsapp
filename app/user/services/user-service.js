'use strict';

angular
  .module('main.user')
  .factory('ngUser', ngUser);

ngUser.$inject = [];

function ngUser() {

  return {
    login: login,
    isLogin: isLogin,
    getCurrentUser: getCurrentUser,
    signup: signup,
    logout: logout
  };

  function login() {

  }

  function isLogin() {

  }

  function getCurrentUser() {

  }

  function signup() {

  }

  function logout() {

  }

}
