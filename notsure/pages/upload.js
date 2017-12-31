//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout','$window', function ($scope, Upload, $timeout, $window) {
   
	$scope.setsalescontainers = function (typething){
		 var stupid = {};
		    
			 
			 
			 var districtname = "";
			 
				var storename = "";
				var username = "";
				var saletoadd = "";
				var district = $window.district;
				saveContainer.deleteEntry(typething);	
				districtname = getSalesContainer2(typething,0,0);
				districtname = districtname[district];
				//console.log(districtname);
				console.log(districtname);
					for(var stores in districtname['stores']){
						storename = districtname['stores'][stores];
						
						for(var  emps in storename['employees']){
							username = storename['employees'][emps];
							
							for(var sale in username['sales']){
								saletoadd = username['sales'][sale];
								
								saveContainer.fcontainer(typething , districtname.name, storename.name, username.name,saletoadd.name,saletoadd.QTY,saletoadd.GP);	
							}
						}
					}
		
		
	}
	
	$scope.refreshMTD= function (){
		$scope.setsalescontainers("LastMonth");
		$scope.setsalescontainers("MTD");
		$scope.setsalescontainers("lastweek");
		$scope.setsalescontainers("Yesterday");
		$scope.setsalescontainers("Today");
		
		
		

	}
	
	try{
    $scope.$watch('files', function () {
    	
    	
    	
    	$scope.upload($scope.files);
         });}catch(err){}
    
    
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
               
               var setDateForUpload = document.getElementById("datepickerstart");
           
                Upload.upload(
                	{
                    url: '/notsure/pages/masterform2.cfm',
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