








// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('ContractCtrl', ContractCtrl);

// Inject my dependencies
ContractCtrl.$inject = ['$routeParams','$scope','$window','userlist', '$location'];

// Now create our controller function with all necessary logic

function ContractCtrl($routeParams, $scope, $window, userlist, $location) {
	
	var today = new Date();
	$scope.vars={};
	
	$scope.vars.statusdropdown = ['OK','Flagged'];
	$scope.vars.selectedChecked = false;
	$scope.vars.selectedStatus = 'OK';
	$scope.list= {};
	var todayform = today.getFullYear()+""+("0"+(today.getMonth()+1)).slice(-2)+"00";
	var nextmonthform = today.getFullYear()+""+("0"+(today.getMonth()+2)).slice(-2)+"00";
	var todayrealform = today.getFullYear()+""+("0"+(today.getMonth()+1)).slice(-2)+""+("0"+(today.getDate())).slice(-2);
	var twoweeksbackdate = new Date(today.getFullYear(),today.getMonth(),(today.getDate()-14));
	var twoweeksbackform = twoweeksbackdate.getFullYear()+""+("0"+(twoweeksbackdate.getMonth()+1)).slice(-2)+""+("0"+(twoweeksbackdate.getDate())).slice(-2);
	
	$scope.vars.monthInput1 = todayform;
	$scope.vars.monthInput2 = nextmonthform;
	$scope.csv = {};

	console.log($scope.list);
	$scope.stores = loadProxy.loadDistrict("District Sanat");
	$scope.vars.selectedStore = $scope.stores[0].storeid;
	$scope.vars.selectedInvoice = 0;
   $scope.vars.details = "";
   $scope.vars.mtns = {};
    	$scope.setInvoice = function(a){
    		$scope.vars.mtns = {};
    		console.log(a);
    		$scope.vars.selectedInvoice = a;
    		$scope.vars.details = contractProxy.getStuff(a);
    		$scope.vars.PTAR = invoiceProxy.getptar(a);
    		//console.log($scope.vars.details);
    		for(those in $scope.vars.details){
    			
    			var thisitem = $scope.vars.details[those]['tracking'];
    			$scope.vars.mtns[thisitem] = {};
    			$scope.vars.mtns[thisitem]['num'] = thisitem;
    			// $scope.vars.mtns[$scope.vars.details[those]['tracking']] = thisitem['tracking'];
    			  $scope.vars.mtns[thisitem]['stuff'] ={};
    		}
    		//console.log($scope.vars.mtns);
    		for(them in $scope.vars.mtns){
    			var thisNum = $scope.vars.mtns[them].num;
    			//console.log(contractProxy.eachNumberStatusLookup(thisNum));
    		 $scope.vars.mtns[thisNum]['stuff'] = contractProxy.eachNumberStatusLookup(thisNum);
    		}
    		console.log($scope.vars.mtns);
    		
    	}
    	
		$scope.setMonth = function(a,b){
			$scope.list =  contractProxy.getVRI(a,b);
			$scope.csv = contractProxy.getUniqueMTNCSV(b , a);
		}
		$scope.updateInv = function(a){
    		
    		
    		contractProxy.updateInvoice(a);
    		
    		
    	}
    	
    	function selectElementContents(el) {
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
            document.execCommand("copy");
		 } 
		 else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(el);
            range.select();
            range.execCommand("Copy");
        }
    }
	
    	$scope.copyCSVMTN = function(){
    		
    		
	    	var stuffThing = document.getElementById("csvmtn");
			stuffThing.style.display = "inline";
			selectElementContents(document.getElementById("csvmtn"));
			stuffThing.style.display = "none";
    	}
    	$scope.eachNumberStatusLookup = function(){
    	
    	
    	}
    	
    	
    	
		
		//console.log($scope.csv);
		$scope.setMonth(todayform  , nextmonthform );
}














