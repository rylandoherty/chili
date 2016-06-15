
storeDetails = [[0],[0]];
newLinesFR=0;
loggedIn = 0;
saleDetails ="";
angular.module('ngViewExample', ['ngRoute', 'ngAnimate','myApp'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
  	

    $routeProvider
       .when('/Login',{
       	templateUrl: '/views/login2.html',
        controller: 'LoginCtrl',
       controllerAs: 'user'
       })
        
       .when('/Inventory', {
      	 templateUrl: '/views/inventory.cfm',
        controller: 'InventoryCtrl',
       controllerAs: 'inventory'
       
      })
      .when('/Order', {
      	 templateUrl: '/views/order.html',
        controller: 'InventoryCtrl',
       controllerAs: 'inventory'
       
      })
      .when('/ProductControl', {
      	 templateUrl: '/views/productmanagement.html',
        controller: 'ProductCtrl',
       controllerAs: 'productManagement'
       
      })
       .when('/Upload', {
      	 templateUrl: '/views/upload.html',
        controller: 'DailyReport',
       controllerAs: 'store'
       
      })
      .when('/Invoice/:invoice', {
      	
        templateUrl: '/views/saledetail.html',
        controller: 'DailyReport',
       controllerAs: 'report'
      })
      .when('/MTDEmp', {
      	
        templateUrl: '/views/employeetodatereport.html',
        controller: 'DailyReportCtrl',
       controllerAs: 'dailyreport'
      })
    .when('/Stores', {
      	
        templateUrl: '/views/dailyreport.html',
        controller: 'DailyReportCtrl',
       controllerAs: 'dailyreport'
      })
      .when('/Activations', {
      	
        templateUrl: '/views/activations.html',
        controller: 'DailyReportCtrl',
       controllerAs: 'dailyreport'
      })
      .when('/Store/:storeId', {
        templateUrl: '/views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
     
      .when('/Comm', {
        templateUrl: '/views/commreport.html',
        controller: 'DailyReportCtrl',
        controllerAs: 'dailyreport'
      })
      .when('/fdsfds', {
        templateUrl: '/abc',
        controller: 'MainCtrl',
        controllerAs: 'user'
      })
      
     

    $locationProvider.html5Mode(true);
}])

.controller('StoreCtrl', ['$routeParams','$scope', function($routeParams, $scope) {

  this.name = "StoreCtrl";
  this.params = $routeParams;
 
  
}])



.service('sharedProperties', function () {
        var property = 'suttin';

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        }
        
})



	


  

.controller('DailyReport', ['$routeParams', '$scope','$window', function($routeParams, $scope, $window) {
 $scope.invoice = function ( id ) {
    saleDetails = id;
}
$scope.dateArray = getCurrentDates();


}]);











  getCurrentDates = function (){
  	
var now = new Date();
var yest = new Date(now.getFullYear(),now.getMonth(),now.getDate()-1);
var first = new Date(now.getFullYear(),now.getMonth(),01);
var today = "";
var f = now;
var yesterday = "";
var monthToDate = "";

if(f.getMonth()<=9&&f.getDate()<=9){
	today = f.getFullYear()+"0"+f.getMonth()+"0"+f.getDate();
	yesterday = yest.getFullYear()+"0"+yest.getMonth()+"0"+yest.getDate();
	monthToDate = first.getFullYear()+"0"+first.getMonth()+"01 - "+today;
	console.log(1);
}
else if(f.getMonth()<=9&&f.getDate()>9){
	today = f.getFullYear()+"0"+f.getMonth()+f.getDate();
	yesterday = yest.getFullYear()+"0"+yest.getMonth()+yest.getDate();
	monthToDate = first.getFullYear()+"0"+first.getMonth()+"01 - "+today;
	console.log(2);
}
else if(f.getDate()<=9){
	today = f.getFullYear()+f.getMonth()+"0"+f.getDate();
	yesterday = yest.getFullYear()+yest.getMonth()+"0"+yest.getDate();
	monthToDate = first.getFullYear()+first.getMonth()+"01 - "+today;
	console.log(3);
}
else{
	today = f.getFullYear()+f.getMonth()+f.getDate();
	yesterday = yest.getFullYear()+yest.getMonth()+yest.getDate();
	monthToDate = first.getFullYear()+"0"+first.getMonth()+"01 - "+today;
	console.log(4);
}
return [today,yesterday,monthToDate];


  	
  	
  	
  }
  

  
  
