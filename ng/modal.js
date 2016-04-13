
var app = angular.module('exampleDialog', ['ngDialog']);

app.controller('MainCtrl', function ($scope, $rootScope, ngDialog) {
$rootScope.jsonData = '{"foo": "bar"}';
$rootScope.theme = 'ngdialog-theme-default';

$scope.open = function () {
ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl' });
};

$scope.openDefault = function () {
ngDialog.open({
template: 'firstDialogId',
controller: 'InsideCtrl',
className: 'ngdialog-theme-default'
});
};

$scope.openPlain = function () {
$rootScope.theme = 'ngdialog-theme-plain';

ngDialog.open({
template: 'firstDialogId',
controller: 'InsideCtrl',
className: 'ngdialog-theme-plain'
});
};

$scope.openTemplate = function () {
$scope.value = true;

ngDialog.open({
template: 'externalTemplate.html',
className: 'ngdialog-theme-plain',
scope: $scope
});
}
});

app.controller('InsideCtrl', function ($scope, ngDialog) {
$scope.openSecond = function () {
ngDialog.open({
template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
plain: true,
closeByEscape: false,
controller: 'SecondModalCtrl'
});
};
});

app.controller('SecondModalCtrl', function ($scope, ngDialog) {
$scope.closeSecond = function () {
ngDialog.close();
};
});

