'use strict';

(function(angular) {
  /* Declaramos el módulo e inyectamos el router */
  // https://github.com/angular-ui/ui-router
  // npm install --save angular-ui-router
  var dependenciasProyecto = ['ui.router', 'ngAnimate'];

  angular.module('app', dependenciasProyecto);

  /* Definimos la configuración del proyecto durante la fase config */
  /* Necesitamos inyectar algunos "providers" del router */
   angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var detail = {
      name: 'detail',
      url: '/detail/:idAnimal',
      params: {
        idAnimal: { squash: true, value: null }
      },
      template: '<view-detail></view-detail>'
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
    $stateProvider.state(detail);
    $stateProvider.state(about);
    $stateProvider.state(create);
    $stateProvider.state(game);

    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');

 
  }

})(angular);