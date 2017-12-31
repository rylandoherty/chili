
app = angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
  	

    $routeProvider
       
        .when('/DoorCount', {
      	 templateUrl: 'doorcount.html',
        controller: 'DoorCountCtrl',
       controllerAs: 'doorcount'
       
      })
    
      
     

    $locationProvider.html5Mode(true);
}])









	


  

















  
  
