

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('UserListCtrl', UserListCtrl);

// Inject my dependencies
UserListCtrl.$inject = ['$routeParams','$scope','$window','userlist','$rootScope'];

// Now create our controller function with all necessary logic

function UserListCtrl($routeParams, $scope, $window, userlist ,$rootScope ) {
	$scope.dog = {};
	
	$scope.calltest = function(){
		console.log(f.testCF());
		$scope.dog.testCF = f.testCF();
	}
	
	
      
     
    
	
	$scope.thisGuy = $window.user;
	//Html scope variables
	$scope.sorts={};
	$scope.sorts.bystore=['primarystorename', 'accesslevel'];
	$scope.sorts.bystorecomm=['USER.primarystorename', 'USER.accesslevel'];
	$scope.sorts.active=['lastactive'];
	
	//Load stuff settings;
	//Load real Stuff;
	console.log($scope.locations);
	//Html scope variables
	var dogtown = 0;
	//Load stuff settings;
	$scope.stuff={};
	$scope.stuff.selectedDate = 112018;
	$scope.stuff.locations = f.getLocationObject();
	$scope.stuff.formulalist =  groupProxy.loadFormula();
	console.log($scope.stuff.formulalist);
	$scope.stuff.newList = [];
	
	 $(function() {
            $('.date-pick').datepicker( {
            changeMonth: true,
            changeYear: true,
            showButtonPanel: false,
            dateFormat: 'mmyy',
            onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            
            }
            });
        });
        $(function() {
            $('.date-pickerx').datepicker( {
            changeMonth: true,
            changeYear: true,
            showButtonPanel: false,
            dateFormat: 'mmyy',
            onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
             
            }
            });
        });
	
	console.log($scope.stuff.locations);
	
	$scope.copyToMonth = function(c){
		var box = {};
		box.frommonth =$scope.stuff.selectedDate;
		box.tomonth = $scope.stuff.copyDate;
		box.user = $scope.stuff.copyEmployee;
		var quer = f.copyToMonth(box.frommonth, box.tomonth, box.user);
		console.log(quer);
		
		
	}
	
	$scope.updateDateValue2 = function(){
		$scope.stuff.copyDate = document.getElementById('xDate').value;
		$scope.reload();
		
	}
	$scope.updateDateValue = function(){
		$scope.stuff.selectedDate = document.getElementById('startDate').value;
		$scope.reload();
		
	}
	$scope.deleteCommGroup = function(){
		f.deleteCommGroup($scope.stuff.commissiongroupid);
		$scope.reload();
	}
	
	$scope.updateCommGroup = function(){
		var item = {};
			item.commissiongroupid = $scope.stuff.commissiongroupid;
			item.name = $scope.stuff.newName;
			item.basepaypercent =$scope.stuff.basepercent;
			
			item.measuretarget = $scope.stuff.selectedTargetType;
			item.drawtype = $scope.stuff.drawtype;
			item.drawvalue = $scope.stuff.drawvalue;
			if($scope.stuff.drawtype == "None" || $scope.stuff.drawtype == "Hourly"){
				item.drawvalue = 0;
			}
			console.log(item);
			f.updateCommGroup(item);
		$scope.reload();
		
	}
	$scope.duplicateCommGroup = function(){
		var item = {};
		item.commissiongroupid = $scope.stuff.commissiongroupid;
		console.log(item);
		var respon = f.duplicateCommGroup(item);
		$scope.reload();
		console.log(respon);
	}
	$scope.updateCommType = function(x){
		console.log(x);
		f.updateCommType(x);
		$scope.reload();
		
	}
	$scope.deleteCommType = function(x){
		f.deleteCommType(x);
		$scope.reload();
	}
	$scope.greaterThan = function(prop, val){
		
    return function(item){
    	
      return item[prop] > val;
    }
}
$scope.selectCommGroup = function(commGroup){
	console.log(commGroup);
	$scope.stuff.wholeCommGroup = commGroup;
	$scope.stuff.commissiongroupid = commGroup.commissiongroupid;
	$scope.stuff.newName = commGroup.name;
	$scope.stuff.drawtype = commGroup.drawtype;
	$scope.stuff.drawvalue = commGroup.drawvalue;
	$scope.stuff.basepercent = commGroup.basepaypercent;
	$scope.stuff.growthtype = commGroup.bonusratetype;
	$scope.stuff.selectedTargetType = commGroup.measuretarget;
}
$scope.createNewCommGroup = function(user){
	console.log(user);
	 f.newCommGroup(user);
	 $scope.reload();
	
}
$scope.createNewCommSpiffGroup = function(user){
	 f.newCommSpiffGroup(user);
	 $scope.reload();
	
}
$scope.createCommPeg = function(formula){
	console.log(formula);
	 f.createNewCommPeg(formula.commissiontypeid, formula.newpay, formula.newwork);
	 $scope.reload();
	 $scope.selectCommGroup($scope.stuff.commissiongroupid);
	
}
$scope.createNewCommType = function(){
	 f.createNewCommType($scope.stuff.commissiongroupid , $scope.stuff.selectedFormulaToAdd);
	 $scope.reload();
	
}
$scope.loadCommGroup = function(){
	$scope.stuff.commGroups = f.loadCommGroup();
	
}
$scope.updatePeg = function(x){
	console.log(x);
		f.updatePeg(x);
}
$scope.copyToEmployee = function(a,b){
	console.log(a);
	console.log(b);
	f.copyToEmployee(a,b);
	$scope.reload();
}
$scope.remainingcheckcommemps = function(){
	
		$scope.stuff.newList = [];
		for(each in $scope.userlist){
			var found = false;
			var thisname = $scope.userlist[each].name;
			for(eich in $scope.commemps){
				
				var thatname = $scope.commemps[eich].USER.name;
			
				if(thisname==thatname){
					found = true;
				}
			}
			if(found == false){
				$scope.stuff.newList.push($scope.userlist[each]);
			}
		}
		
		
	}
	$scope.reload = function(){
		$scope.userlist = f.getUserListWithComms($scope.stuff.selectedDate);	
		console.log($scope.userlist);
		$scope.commemps = f.getcommissionable($scope.stuff.selectedDate);
		$scope.remainingcheckcommemps();
		$scope.loadCommGroup();
		console.log($scope.commemps);
		
	}
	
	$scope.addCommissionableEmployee = function(){
		f.createcommissionableemployee($scope.stuff.selectedDate, $scope.stuff.addingEmployee);
		$scope.reload();
	}
	$scope.accesslevelchange = function(use,lvl){
		if(lvl<100&&lvl>-100){
			f.setAccessForUser(use, lvl)
			$scope.reload();
			
		}
	}
	
	
	
	$scope.reload();
}