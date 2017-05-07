(function(angular) {

  angular.module('app').component('viewCreate', {
    templateUrl:  'app/components/create/view-create-template.html',
    controller: ['$state','playerFactory', viewCreate],
    controllerAs: 'viewCreate',
  });

  function viewCreate($state, playerFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.playerInfo = {
        name: '',
        surname: '',
        avatar: ''
      };
    };
    //accedo a un método de mi factoría al que le paso el objeto recogido playerInfo
    vm.setPlayerInfo = function (){
      playerFactory.setPlayer(vm.playerInfo);

      vm.goToGame();
    };

    vm.goToGame = function() {
     $state.go('game');   
    };

  };
})(angular);