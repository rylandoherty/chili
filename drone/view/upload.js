//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout','$window', function ($scope, Upload, $timeout, $window) {

	
	 $scope.log = '';
				$scope.uploadfile = ""; 	
	$scope.data = {};
	$scope.data.locationlist = uploadProxy.getLocations();
	
	$scope.data.locationlist.push({'locationid':0, 'name':"new"});
	
	$scope.data.viewlist = uploadProxy.getUploadType();
	$scope.data.pilotlist = uploadProxy.getPilots();  	
	console.log($scope.data);	
	
	try{
    $scope.$watch('files', function () {
    	
    	
    	
    	$scope.upload($scope.files);
         });}catch(err){}
    
    
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file]; 
        }
    });
   
	$scope.addLocation = function (){
		uploadProxy.addLocation($scope.data.locationname);
		$scope.data.locationlist = uploadProxy.getLocations();
		$scope.data.locationlist.push({'locationid':0, 'name':"new"});
	}
	
    $scope.upload = function (files ) {
    	
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
            	
              var file = files[i];
             
              if (!file.$error) {
              	console.log($scope.data);
               var b = uploadProxy.setUpload(file.name, $scope.data.selectpilot ,$scope.data.locationselect, $scope.data.viewselect);
                console.log(b);
               
             
           
                Upload.upload(
                	{
                    url: 'pages/masterform2.cfm',
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
                
              }
            }
        }
    };
}]);