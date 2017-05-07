(function(angular) {

  angular.module('app').factory('cardsFactory', [cardsFactory]);

  function cardsFactory() {
    var module = {};
    var self = module;

    module.cardsBack = [
	    {id: 0, name: 'back', img: 'logo.png'},
	    {id: 1, name: 'back', img: 'logo.png'},
	    {id: 2, name: 'back', img: 'logo.png'},
	    {id: 3, name: 'back', img: 'logo.png'},
	    {id: 4, name: 'back', img: 'logo.png'},
	    {id: 5, name: 'back', img: 'logo.png'},
	    {id: 6, name: 'back', img: 'logo.png'},
	    {id: 7, name: 'back', img: 'logo.png'},
    ];

    module.cardsFront = [
	    {id: 0, name: "cebra", img: "cebra.png"},
	    {id: 1, name: "coco", img: "coco.png"},
	    {id: 2, name: "pingu", img: "pingu.png"},
	    {id: 3, name: "sandia", img: "sandia.png"},
	    {id: 4, name: "cebra", img: "cebra.png"},
	    {id: 5, name: "coco", img: "coco.png"},
	    {id: 6, name: "pingu", img: "pingu.png"},
	    {id: 7, name: "sandia", img: "sandia.png"},
    ];

	module.getCardsBack = function() {
		return self.cardsBack;
		
    };

    return self;
  };

})(angular);