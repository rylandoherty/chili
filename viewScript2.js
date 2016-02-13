saleDetails="";
angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
  	

    $routeProvider
       
      .when('/Store/:storeId/Upload', {
      	 templateUrl: '/views/upload.html',
        controller: 'DailyReport',
       controllerAs: 'store'
       
      }
      
      )
      .when('/Store/:storeId/Report/:reportRequest/Invoice/:invoice', {
      	
        templateUrl: '/views/saledetails.html',
        controller: 'DailyReport',
       controllerAs: 'report'
      })
      .when('/Store/:storeId/Report/:reportRequest', {
      	
        templateUrl: '/views/reportx.html',
        controller: 'DailyReport',
       controllerAs: 'report'
      })
    .when('/Stores', {
      	
        templateUrl: '/views/stores.html',
        controller: 'StoreCtrl',
       controllerAs: 'store'
      })
      
      .when('/Store/:storeId', {
        templateUrl: '/views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
      
      
     

    $locationProvider.html5Mode(true);
}])
.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
    
}])

.controller('StoreCtrl', ['$routeParams', function($routeParams) {

  this.name = "StoreCtrl";
  this.params = $routeParams;
}])


.controller('DailyReport', ['$routeParams', '$scope','$window', function($routeParams, $scope, $window) {
$scope.invoice = function ( id ) {
    saleDetails = id;
}

  $scope.abc = $window.theReturn;
  for(var sale in $scope.abc){
  	 var arrayForDate = [sale.CREATEDON];
  }
  this.name = "DailyReport";
  this.params = $routeParams;
   console.log($scope.abc);
 $scope.saleDetails = saleDetails;
  console.log(saleDetails);
 
}]);

