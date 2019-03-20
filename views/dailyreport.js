

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('DailyReportCtrl', DailyReportCtrl);

// Inject my dependencies
DailyReportCtrl.$inject = ['$routeParams','$scope','$window', '$location'];

// Now create our controller function with all necessary logic

function DailyReportCtrl($routeParams, $scope, $window, $location) {
	
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var day = today.getDate();
	$scope.sendindate = year+""+('0'+month).slice(-2)+""+('0'+day).slice(-2);
	$scope.result = "";
	$scope.thisGuy = $window.user;
	var district = "District Sanat";
	$scope.vars = {};
	$scope.vars.dateone = $scope.sendindate;
	$scope.vars.selectedInvoice = "";
	$scope.vars.selectedStore = "";
	$scope.vars.selectedColumn = "";
	$scope.vars.selectedRow = "";
	$scope.vars.total = {};
	$scope.vars.dollarInput = 0;
	$scope.vars.commentToAdd = 0;
	

	
		$scope.result = cashProxy.TwoCyclesPTARDatascapedailyreportinput($scope.sendindate);
		console.log($scope.result);
		$scope.loadDate = function(date){
			$scope.result = cashProxy.TwoCyclesPTARDatascapedailyreportinput(date);
		}
		 
		$scope.setInvoice = function(invoice){
			$scope.vars.selectedInvoice = cashProxy.getInvoice(invoice);
			
			
		}
		$scope.runt = function(r,c){
			$scope.vars.selectedColumn = c;
			$scope.vars.selectedRow = r;
		}
		$scope.dayClicked= function(rez){
			
		}
		$scope.lockDay = function(type, item){
			var objSend = {};
			if(item.LOCKED) objSend.value = 1;
			else objSend.value = 0;
			objSend.user = $scope.thisGuy.name;
			objSend.date = item.DATE;
			objSend.value = item.LOCKED;
			objSend.store = $scope.vars.selectedStore;
			objSend.type = type;
			objSend.comment = "";
			cashProxy.updateDayValue(objSend);
		}
		
	$scope.newUserInput = function(type, item){
		var objSend = {};
		objSend.user = $scope.thisGuy.name;
		objSend.date = item.DATE;
		objSend.value=0;
		if(type == "COMMENTS"){
			objSend.comment = item.COMMENTS;
			console.log(objSend.value);
			objSend.type = type;
			objSend.store = $scope.vars.selectedStore;
			
			cashProxy.updateDayValue(objSend);
			
			//$scope.result = cashProxy.TwoCyclesPTARDatascapedailyreportinput($scope.sendindate);
		}
		else
		{
		objSend.value = eval("item."+type+".Total");
		
		console.log(objSend.value);
		if(objSend.value==''){
		objSend.value=0;	
		}
		objSend.comment = "";
		objSend.type = type;
		objSend.store = $scope.vars.selectedStore;
		var respon = cashProxy.updateDayValue(objSend);
		
		//$scope.result = cashProxy.TwoCyclesPTARDatascapedailyreportinput($scope.sendindate);
		}
		
		
	}
	$scope.addPayout = function(type){
		var objSend = {};
		objSend.user = $scope.thisGuy.name;
		objSend.date = $scope.vars.selectedRow.DATE;
		objSend.value=0;
		objSend.value = $scope.vars.dollarInput;
		
		console.log(objSend.value);
		if(objSend.value==''){
		objSend.value=0;	
		}
		objSend.comment = $scope.vars.commentToAdd;
		objSend.type = type;
		objSend.store = $scope.vars.selectedStore;
		cashProxy.updateDayValue(objSend);
		
		$scope.result = cashProxy.TwoCyclesPTARDatascapedailyreportinput($scope.sendindate);
		$scope.vars.commentToAdd = "";
		$scope.vars.dollarInput = 0;
	}
	$scope.setTotals = function(rez){
		var maff = -1;
		if(rez.checked)
			maff = 1;
		
		$scope.vars.total.DAILY = $scope.vars.total.DAILY +(rez.DAILY.Total * maff);
		$scope.vars.total.DAILYDATASCAPE = $scope.vars.total.DAILYDATASCAPE +(rez.DAILYDATASCAPE.Total * maff);
		$scope.vars.total.PAYOUTS = $scope.vars.total.PAYOUTS +(rez.PAYOUTS.Total * maff);
		$scope.vars.total.DEPOSITS = $scope.vars.total.DEPOSITS +(rez.DEPOSITS.Total * maff);
		
		$scope.vars.total.CASHEXPECTED = $scope.vars.total.CASHEXPECTED +((rez.BILLPAY.Total+rez.CASH.Total+rez.REFUNDCASH.Total+rez.PAYOUTS.Total) * maff);
		$scope.vars.total.DATASCAPE = $scope.vars.total.DATASCAPE +((rez.BILLPAY.Total+rez.NONCOMM.Total) * maff);
		$scope.vars.total.CASHSALES = $scope.vars.total.CASHSALES +(rez.CASH.Total * maff);
		$scope.vars.total.CASHREFUNDS = $scope.vars.total.CASHREFUNDS +(rez.REFUNDCASH.Total * maff);
		$scope.vars.total.BILLPAY = $scope.vars.total.BILLPAY +(rez.BILLPAY.Total * maff);
		$scope.vars.total.BILLPAYCARD = $scope.vars.total.BILLPAYCARD +(rez.NONCOMM.Total * maff);
		$scope.vars.total.DATASCAPEDIFFERENCE = $scope.vars.total.DATASCAPEDIFFERENCE + ((rez.DATASCAPE.Total - (rez.BILLPAY.Total+rez.NONCOMM.Total)) * maff);
		$scope.vars.total.DATASCAPETOTAL = $scope.vars.total.DATASCAPETOTAL + ((rez.DATASCAPE.Total ) * maff);
		
		
		
		
		
		
	}
	$scope.setTotalsZero = function(){
		
		$scope.vars.total.DAILY = 0;
		$scope.vars.total.DAILYDATASCAPE = 0;
		$scope.vars.total.PAYOUTS = 0;
		$scope.vars.total.DEPOSITS = 0;
		$scope.vars.total.CASHEXPECTED = 0;
		$scope.vars.total.DATASCAPE = 0;
		$scope.vars.total.CASHINDIFFERENCE = 0;
		$scope.vars.total.CASHSALES = 0;
		$scope.vars.total.CASHREFUNDS = 0;
		$scope.vars.total.BILLPAY = 0;
		$scope.vars.total.BILLPAYCARD = 0;
		$scope.vars.total.DATASCAPEDIFFERENCE = 0;
		$scope.vars.total.DATASCAPETOTAL = 0;
	}

   $scope.setTotalsZero();
    	
	
}