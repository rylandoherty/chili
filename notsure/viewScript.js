'use strict';

/* App Module */

var phonecatApp = angular.module('ngViewExample', [
  'ngRoute','userService','userlistService' ,'fileUpload'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Login', {
        templateUrl: 'login/loginView.cfm',
        controller: 'LoginCtrl',
        controllerAs: 'user' 
      }).
     when('/User', {
        templateUrl: 'views/userhomepage.cfm',
        controller: 'UserCtrl',
        controllerAs: 'employee'
      }).
       when('/MonthlyGoals', {
          templateUrl: 'views/monthlygoals.cfm',
          controller: 'MonthlyGoalCtrl',
          controllerAs: 'Goals'
        }).

        when('/StoreGoals', {
           templateUrl: 'views/storegoals.cfm',
           controller: 'StoreGoalCtrl',
           controllerAs: 'Goals'
         }).
       when('/Schedule', {
        templateUrl: 'views/employeereport.cfm',
        controller: 'ScheduleCtrl',
        controllerAs: 'Schedule'
      }).
      when('/usersettings', {
        templateUrl: 'views/usersettings.cfm',
        controller: 'usersettingsCtrl',
        controllerAs: 'usersettings'
      }).
      when('/goalView', {
        templateUrl: 'views/goalView.cfm',
        controller: 'goalViewCtrl',
        controllerAs: 'goalView'
      }).
      when('/goalformat', {
        templateUrl: 'views/goalformat.cfm',
        controller: 'GoalFormatCtrl',
        controllerAs: 'goalformat'
      }).
      
      when('/formulaproductgroup', {
        templateUrl: 'views/formulaproductgroup.cfm',
        controller: 'formulaproductgroupCtrl',
        controllerAs: 'formulaproductgroup'
      }).
      when('/mtd', {
        templateUrl: 'views/mtd.cfm',
        controller: 'mtdCtrl',
        controllerAs: 'mtd'
      }).
      
     when('/Upload', {
        templateUrl: 'pages/upload.cfm',
        controller: 'MyCtrl',
        controllerAs: 'upload'
      }).
      when('/Manager', {
        templateUrl: 'views/managerhomepage.cfm',
        controller: 'ManagerCtrl',
        controllerAs: 'manager'
      }).
      when('/UserList', {
        templateUrl: 'views/userlist.cfm',
        controller: 'UserListCtrl',
        controllerAs: 'manager'
      }).
      when('/Admin', {
        templateUrl: 'views/adminhomepage.cfm',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      }).
       when('/ProductGroups', {
        templateUrl: 'views/ProductGroups.cfm',
        controller: 'ProductGroupsCtrl',
        controllerAs: 'ProductGroups'
      }).
      otherwise({
        redirectTo: '/Login',
        controller: 'LoginCtrl',
        controllerAs: 'user' 
      });
  }]);
