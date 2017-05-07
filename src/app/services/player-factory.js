(function(angular) {

  angular.module('app').factory('playerFactory', [playerFactory]);

  function playerFactory() {
    var module = {};
    var self = module;

    module.playerInfo = {};

    module.setPlayer = function (player){
      self.playerInfo = player;
    };

    module.getPlayer = function (){
      return self.playerInfo;
    };

    return module;

  };

})(angular);


