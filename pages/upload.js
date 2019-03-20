//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout','$window', function ($scope, Upload, $timeout, $window) {
   $scope.year = $window.datesStore.year;
	$scope.month = $window.datesStore.month;
	$scope.monthString=("0"+$scope.month).slice(-2);
	$scope.district = $window.datesStore.district;
	$scope.thisDate = new Date($scope.year, $scope.month,1);
	
	$scope.setsalescontainers = function (typething){
		 var stupid = {};
		  
		  
			var storename = "";
				var username = "";
				var saletoadd = "";
				var district = $window.district;
				from = 0
			 	to = 0;
			 var districtname = "";
			 if(typething=="Calendar"){
			 	
			 	from = ""+$scope.year+("0"+$scope.month).slice(-2)+"01";
			 	to = ""+$scope.year+("0"+$scope.month).slice(-2)+"32"; 
			 	saveContainer.deleteEntry(typething,from);
			 	districtname = getSalesContainer2(typething,from,to);
			 	districtname = districtname[district];
			 	
			 }
			 else{
			 	saveContainer.deleteEntry(typething,from);
			 	districtname = getSalesContainer2(typething,from,to);
				districtname = districtname[district];
			 }
			 
				
					
				
				//console.log(districtname);
				
					for(var stores in districtname['stores']){
						storename = districtname['stores'][stores];
						
						for(var  emps in storename['employees']){
							username = storename['employees'][emps];
							
							for(var sale in username['sales']){
								saletoadd = username['sales'][sale];
								
								saveContainer.fcontainer(typething , districtname.name, storename.name, username.name,saletoadd.name,saletoadd.QTY,saletoadd.GP,from,to);	
							}
						}
					}
		
		
	}
	$scope.salescontainer2018= function (){
	var results = saveContainer.actualcontainermaker();
	console.log(results);
	}
	$scope.refreshMTD= function (){
		if($scope.month==$window.datesStore.month){
		$scope.setsalescontainers("MTD");
		$scope.setsalescontainers("lastweek");
		$scope.setsalescontainers("Yesterday");
		$scope.setsalescontainers("Today");
		}
		else{
		$scope.setsalescontainers("Calendar");
		}
	}
	
	$scope.changeMonth = function(change){
	 	$scope.month=parseInt($scope.month)+parseInt(change);
	 	//console.log($scope.monthCode);
	 	if($scope.month>12){
		 	$scope.month=1;
		 	$scope.year=$scope.year+1;
	 	}
	 	else if($scope.month==0){
	 		$scope.month=12;
		 	$scope.year=$scope.year-1;
	 	}
	 	$scope.monthString =("0"+$scope.month).slice(-2);
	 	
	 	
	 	
	 	$scope.drawlist =  f.getUserListHoursPerWeek($scope.district, $scope.year, $scope.month);
	 	
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
                    url: '/pages/masterform2.cfm',
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