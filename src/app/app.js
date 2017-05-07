'use strict';

(function(angular) {

  var dependenciesProject = ['ui.router', 'ngAnimate'];

  angular.module('app', dependenciesProject);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var about = {
      name:'aboutUs',
      url: '/aboutUs',
      template: '<h3>Powered by Aida Design with Angular JS</h3>'
    };

    var create = {
      name:'create',
      url: '/create',
      template: '<view-create></view-create>'
    };
  
    var game = {
      name:'game',
      url: '/game',
      template: '<view-game></view-game>'
    };
  

    $stateProvider.state(main);
    $stateProvider.state(about);
    $stateProvider.state(create);
    $stateProvider.state(game);

    $urlRouterProvider.otherwise('/main');

 
  }

})(angular);