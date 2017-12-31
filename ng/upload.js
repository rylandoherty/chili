//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file]; 
        }
    });
    $scope.log = '';

    $scope.upload = function (files) {
    	
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
            	
              var file = files[i];
             
              if (!file.$error) {
              // var b = uploadProxy.setUpload(files);
               // console.log(b);
               var dog = "";
                Upload.upload(
                	{
                    url: '/components/masterform2.cfm',
                    data: {
                      file: file  
                    }}
                ).then(function (resp) {
                    $timeout(function() {
                        $scope.log = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.log;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.log;
                });
                
                //WOULD BE NICE IF IT WORKED. IT DOESNT RIGHT NOW
               // var spreadsheetresult = logicProxy.loadspreadsheet(file.name.substring(0,file.name.length-4));
                
               //Loadingresponse = Proxy Process That file If successful();
              }
            }
        }
    };
}]);