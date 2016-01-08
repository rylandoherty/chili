kjfdsk
angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
  	
    $routeProvider
       
      .when('/Store/:storeId/Upload', {
      	 templateUrl: 'upload.cfm',
        controller: 'WelcomeCtrl',
       controllerAs: 'store'
      }
      )
    .when('/Stores', {
      	
        templateUrl: 'stores.html',
        controller: 'StoreCtrl',
       controllerAs: 'store'
      })
      
      .when('/Store/:storeId', {
        templateUrl: 'store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
      .when('/Book/:bookId', {
        templateUrl: 'book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: 'ChapterCtrl',
        controllerAs: 'chapter'
      })
      
     

    $locationProvider.html5Mode(true);
}])
.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}])
.controller('BookCtrl', ['$routeParams', function($routeParams) {
  this.name = "BookCtrl";
  this.params = $routeParams;
}])
.controller('StoreCtrl', ['$routeParams', function($routeParams) {

  this.name = "StoreCtrl";
  this.params = $routeParams;
}])
.controller('WelcomeCtrl', [ function() {
	console.log("idiot...");
  
}])

.controller('ChapterCtrl', ['$routeParams', function($routeParams) {
  this.name = "ChapterCtrl";
  this.params = $routeParams;
}]);

