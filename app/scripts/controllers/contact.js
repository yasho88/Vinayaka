'use strict';

/**
 * @ngdoc function
 * @name vinayakApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the vinayakApp
 */
(function(){

vapp.controller('ContactCtrl', ['$http', '$scope','$window',
		function ($http,$scope,$window){

        $scope.user = {
                    name: {
                         required: true,
                         minlength: 5,
                         maxlength: 25
                    },
                    message: {
                        required: true,
                         minlength: 10,
                         maxlength: 300
                    },
                    email: {
                        required: true
                    }
               };
          $scope.submit= function(){ 
            $http({
            method: 'POST',
            url: './scriptphp/action.php',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(data,status) {
           if (data.success) {
		            $window.alert("Thank you! Your message has been sent.");
		            // display success message
		            $scope.$parent.message = true;
		        }			
		    }).catch(function (data, status) {
		        $window.alert("Sorry, there was a problem!");
		    })};
  }]);

})();