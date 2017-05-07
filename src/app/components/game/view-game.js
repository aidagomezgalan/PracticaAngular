(function(angular) {

  angular.module('app').component('viewGame', {
    templateUrl:  'app/components/game/view-game-template.html',
    controller: ['playerFactory', 'cardsFactory', viewGame],
    controllerAs: 'viewGame'
  });

  function viewGame(playerFactory, cardsFactory) {
    var vm = this;

    vm.$onInit = function (){
    	vm.player = playerFactory.getPlayer();
    	vm.cardsBack = cardsFactory.getCardsBack();
    };

    vm.rotateCard = function (){
    	
    };
  }

})(angular);