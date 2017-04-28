(function(angular) {

  /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
  angular.module('app').factory('playerFactory', ['$http', playerFactory]);

  function playerFactory($http) {
    var self = {};
    var self = self;

    self.infoPlayer = [
      {"name": ""},
      {"email":""},
      {"avatar": ""}
      ];
      

    self.getInfoPlayer = function() {
      return self.infoPlayer; 
    }
    self.setInfoPlayer = function(infoPlayerin) {
      infoPlayer.name=infoPlayerin.name;
      infoPlayer.email=infoPlayerin.email;
      infoPlayer.avatar=infoPlayerin.avatar;

    }


  /* Al principio allAnimals es false 
   self.allAnimals = false; */

   
   /* self.getAllAnimals = function() {
     // Si ya tenemos allAnimals, si no es false, devolvemos una promesa con esos datos; en caso contrario, los cargamos x ajax y luego los devolvemos

     // Declaramos la promesa 
      var defered = $q.defer();
      var promise = defered.promise;

      //  Si ya tenemos los animales, los devolvemos 
      if ( self.allAnimals ) {
        defered.resolve(self.allAnimals);
      } else {
       // Si no, los cargamos con get y devolvemos el data del response
        $http.get('http://localhost:8080/app/mocks/animals.json').then(function(response) {
          // Seteamos allAnimals para que la próxima vez no sea necesaria la llamada ajax
          self.allAnimals = response.data;
          defered.resolve(response.data);
        });
      }

      // Devolvemos la promesa
      return promise;
  }; */

    self.getAnimalById = function(_id_) {
      var len = self.allAnimals.length;
      var id = parseInt(_id_);

      if ( !id ) {
        return false;
      }

      while ( len-- ) {
        if ( self.allAnimals[len].id === id ) {
          return self.allAnimals[len];
        }
      }
    };

    self.addAPlayer = function(newPlayer) {
      newPlayer.name = self.allAnimals.length;
      self.allAnimals.push(newPlayer);
    };

    self.updateAnimal = function(_id_, animatToEdit) {
      var len = self.allAnimals.length;
      var id = parseInt(_id_);

      if ( !animatToEdit ) {
        return;
      }

      while ( len-- ) {
        if ( self.allAnimals[len].id === id ) {
          self.allAnimals[len].name = animatToEdit.name;
          self.allAnimals[len].img  = animatToEdit.img;
          self.allAnimals[len].type = animatToEdit.type;
        }
      }  

    };

    return self;
  };

})(angular);


