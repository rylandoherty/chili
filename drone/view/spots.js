
	
	//inject angular file upload directives and services.
var app = angular.module('myApp');

app.controller('spotCtrl', ['$scope', '$timeout','$window', function ($scope, $timeout, $window) {

	
	
	$scope.data = {};
	$scope.data.pilotlist = uploadProxy.getPilots();
	$scope.data.uploadlist = uploadProxy.getUploads();
	$scope.data.locationlist = uploadProxy.getLocations();
	$scope.data.viewgrouplist = uploadProxy.getViewGroups();
	console.log($scope.data);
   
 
}]);