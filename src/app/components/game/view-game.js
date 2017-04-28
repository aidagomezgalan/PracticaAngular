(function(angular) {

  angular.module('app').component('viewGame', {
    templateUrl:  'app/components/game/view-game-template.html',
    controller: ['$stateParams', 'playerFactory', viewGame],
    controllerAs: 'viewGame'
  });

  function viewGame($stateParams, playerFactory) {
    var vm = this;
 
    /*vm.$onInit = function() {
      var idAnimal = $stateParams.idAnimal; 
 
      vm.animalDetail = animalsFactory.getAnimalById(idAnimal); 
      
    };*/
  }

})(angular);