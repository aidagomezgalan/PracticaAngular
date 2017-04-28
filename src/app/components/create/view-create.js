(function(angular) {

  angular.module('app').component('viewCreate', {
    templateUrl:  'app/components/create/view-create-template.html',
    controller: ['$state', 'playerFactory', viewCreate],
    controllerAs: 'viewCreate'
  });

  function viewCreate($state, playerFactory) {
    var vm = this;

    vm.$onInit = function() { 
      vm.showMsg = false;
      vm.formIsSend = false;     
    };

    //aqui metemos los datos del formulario
    vm.addPlayer = function() {
       var newPlayer = {
         name: vm.playerName, 
         email: vm.playerEmail,
         avatar: vm.playerAvatar
        };

        vm.formIsSend = true;    

        if ( !newPlayer.name || !newPlayer.email || !newPlayer.avatar ) {
          vm.showMsg = true;
        } else {
           vm.showMsg = false;
        }

       if ( !vm.showMsg ) {
        playerFactory.addAPlayer(newPlayer);
      }

      vm.goToGame();

    };

    vm.goToGame = function() {
      $state.go('game');
    };
  }
})(angular);