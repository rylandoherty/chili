'use strict';

/* App Module */

var phonecatApp = angular.module('ngViewExample', [
  'ngRoute','userService','userlistService' ,'fileUpload', 'ngclipboard'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Login', {
        templateUrl: 'login/loginView.cfm',
        controller: 'LoginCtrl',
        controllerAs: 'user' 
      }).
       when('/Logout', {
        templateUrl: 'login/loginViewNoCookie.cfm',
        controller: 'LoginCtrl',
        controllerAs: 'user' 
      }).
      when('/DailyReport', {
        templateUrl: 'views/dailyreport.cfm',
        controller: 'DailyReportCtrl',
        controllerAs: 'dailyreport' 
      }).
      when('/UploadPic', {
        templateUrl: 'drone/view/upload.cfm',
        controller: 'UploadCtrl',
        controllerAs: 'drone' 
      }).
      when('/UserGuide', {
        templateUrl: 'views/userguide.cfm',
        controller: 'UserGuideCtrl',
        controllerAs: 'userguide' 
      }).
       when('/Sam', {
        templateUrl: 'views/samsinventory.cfm',
        controller: 'SamsInventoryCtrl',
        controllerAs: 'sam' 
      }).
      when('/OpList', {
        templateUrl: 'views/operationallog.cfm',
        controller: 'OpErrorCtrl',
        controllerAs: 'op' 
      }).
      when('/commview', {
        templateUrl: 'views/commView.cfm',
        controller: 'CommViewCtrl',
        controllerAs: 'cv' 
      }).
      when('/Rhi', {
        templateUrl: 'views/rhispage.cfm',
        controller: 'RhiCtrl',
        controllerAs: 'rhi' 
      }).
       when('/Contract', {
        templateUrl: 'views/contract.cfm',
        controller: 'ContractCtrl',
        controllerAs: 'contracts' 
      }).
     when('/User', {
        templateUrl: 'views/userhomepage.cfm',
        controller: 'UserCtrl',
        controllerAs: 'employee'
      }).
       when('/LogRecord', {
        templateUrl: 'views/LogRecord.cfm',
        controller: 'LogRecordCtrl',
        controllerAs: 'LogRecord'
      }).
      when('/AccCart', {
        templateUrl: 'views/acccart.cfm',
        controller: 'AccCartCtrl',
        controllerAs: 'AccCart'
      }).
       when('/MonthlyGoals', {
          templateUrl: 'views/monthlygoals.cfm',
          controller: 'MonthlyGoalCtrl',
          controllerAs: 'Goals'
        }).
        when('/MonthlyGoals2', {
          templateUrl: 'views/monthlygoals2.cfm',
          controller: 'MonthlyGoalCtrl2',
          controllerAs: 'Goals'
        }).
         when('/Links', {
          templateUrl: 'views/links.cfm',
          controller: 'LinkCtrl',
          controllerAs: 'links'
        }).
        when('/CallList', {
          templateUrl: 'views/calllist.cfm',
          controller: 'CallListCtrl',
          controllerAs: 'CallList'
        }).
	   when('/ActError', {
          templateUrl: 'views/ActError.cfm',
          controller: 'ActErrorCtrl',
          controllerAs: 'ActError'
        }).
        when('/Ordering', {
          templateUrl: 'views/Ordering.cfm',
          controller: 'OrderingCtrl',
          controllerAs: 'Ordering'
        }).
        when('/DoorCount', {
          templateUrl: 'views/doorcount.cfm',
          controller: 'doorcountCtrl',
          controllerAs: 'doorcount'
        }).
        when('/UsedPhoneCheck', {
          templateUrl: 'views/UsedPhoneCheck.cfm',
          controller: 'UsedPhoneCheckCtrl',
          controllerAs: 'UsedPhoneCheck'
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
      when('/Draw', {
        templateUrl: 'views/draw.cfm',
        controller: 'DrawCtrl',
        controllerAs: 'Draw'
      }).
      when('/Phobio', {
        templateUrl: 'views/samsinventory.cfm',
        controller: 'SamsInventoryCtrl',
        controllerAs: 'Sam'
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
      when('/mtd2', {
        templateUrl: 'views/mtd2.cfm',
        controller: 'mtdCtrl2',
        controllerAs: 'mtd2'
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
       /* redirectTo: '/Login',
        controller: 'LoginCtrl',
        controllerAs: 'user'*/ 
      });
  }]);
