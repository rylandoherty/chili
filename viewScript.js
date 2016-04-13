
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
      	 templateUrl: '/views/inventory.html',
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
      .when('/Store/:storeId/Report/:reportRequest', {
      	
        templateUrl: '/views/report3.html',
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
   
 $scope.saleDetails = saleDetails;
 console.log($scope.saleDetails);
$scope.newLines=0;
	this.name = "DailyReport";
  this.params = $routeParams;
  $scope.thisStore;
  
  for(stores in $scope.code){
  	switch($routeParams.storeId){
  		case $scope.code[stores][0]:
  		
  		$scope.thisStore= $scope.salesByStore[stores];
  		break;
  	}
 
 }
  var soldOnDate = [];
  $scope.showSales;
 for(var storeSales in $scope.thisStore){
  //console.log($scope.thisStore[storeSales]);
  var thisSaleDate = $scope.thisStore[storeSales]['DATE'];
  var str = new String(thisSaleDate);
  
  var typeDate = new Date(str.substring(0,4),str.substring(4,6),str.substring(6,8));
 
  var date = str.substring(0,8);
  var hour = str.substring(8,10);
  var minute = str.substring(10,12);
  Date.prototype.format = function(){
    return (this.getMonth() + 1) + 
    "/" +  this.getDate() +
    "/" +  this.getFullYear();
}
 $scope.thisStore[storeSales]['SHORTDATE'] = typeDate.format();	 
  //console.log(str.substring(0,8));
 $scope.thisStore[storeSales]['TIME'] =hour+" "+minute;	
  if($routeParams.reportRequest=="Today"){
  	if(date==$scope.dateArray[0]){
  	
  	
  	soldOnDate.push($scope.thisStore[storeSales]);	
  	
  	}
  	
  }
  if($routeParams.reportRequest=="Yesterday"){
  	if(date==$scope.dateArray[1]){
  		
  	soldOnDate.push($scope.thisStore[storeSales]);
  	}
  }
  

}
$scope.showSales = soldOnDate;
console.log(soldOnDate);
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
return [today,yesterday,monthToDate];;;;


  	
  	
  	
  }
  

  getNewLines = function (salebystore) {
  	var storeDetails = [[0,0,0],[0,0,0],[0,0,0]];
  	for(storeSales in salebystore){
  	
  var store = salebystore[storeSales];
    for(var sale in store){
    	var inv = store[sale];
    		if(inv['PROFIT'].substring(0,1)=="("){
    			
    			storeDetails[storeSales][2]+= parseInt("-"+inv['PROFIT'].substring(2,inv['PROFIT'].length-1));
    		}
    		else{
    			
    			storeDetails[storeSales][2]+= parseInt(store[sale]['PROFIT'].substring(1,store[sale]['PROFIT'].length));
    		}
    	
    	for(var items in store[sale]['saledetails']){
    		
    		var item = (store[sale]['saledetails'][items]);
    		
    		
    	   
    		
    		switch (item['CATEGORY']) {
  	 		case " >> Activations >> Verizon Wireless >> Phone Rebates (Commissions) >> New Activations (Equip)":
  	 		storeDetails[storeSales][0]+=1;
  	 		break;
  	 		case " >> Activations >> Verizon Wireless >> Equipment >> Apple Phones":
  	 		storeDetails[storeSales][1]+=1;
  	 		break;
  	 		 
  	 		
  	 		}
    	}
    }
}
console.log(storeDetails);
return storeDetails;
  }
  
  loginRequest = function(){ 
	
}
