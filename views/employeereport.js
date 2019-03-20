

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('ScheduleCtrl', ScheduleCtrl);

// Inject my dependencies
ScheduleCtrl.$inject = ['$routeParams','$scope','$window','userlist'];

// Now create our controller function with all necessary logic

function ScheduleCtrl($routeParams, $scope, $window, userlist) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	//Load stuff settings;
	$scope.storemodel;
	$scope.stuff = {};
	$scope.stuff.selecteddate = 0;
	$scope.stuff.viewMode = 'store';
	$scope.district = "District Sanat";
	
	 $(function(){
            $('.date-picked').datepicker( {
            changeMonth: true,
            changeYear: true,
            showButtonPanel: false,
            dateFormat: 'yymmdd',
            onSelect: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay));
               
            
            }
            });
        });
	$scope.reloadpage = function(){
		$scope.stuff.selecteddate = document.getElementById('pickDate').value;
		var dot = $scope.stuff.selecteddate; 
		console.log(dot);
		var year = dot.substring(0,4);
		
		var month = dot.substring(4,6);
		var day = dot.substring(6,8);
		$scope.today = new Date(year,month-1,day);
		console.log(year+" "+month+" "+day);
		console.log($scope.today);
		$scope.firstSunday = new Date($scope.today.getFullYear(),$scope.today.getMonth(),$scope.today.getDate()-$scope.today.getDay());
	$scope.nextSaturday = new Date($scope.today.getFullYear(),$scope.today.getMonth(),$scope.today.getDate()+(6-$scope.today.getDay()));
	console.log($scope.firstSunday);
	console.log($scope.nextSaturday);
	$scope.clocks={};
	$scope.schedule={};
	
	$scope.clocks = f.getclockinclockout(dateToForm($scope.firstSunday),dateToForm($scope.nextSaturday),$scope.district);
	
	$scope.schedule = f.getschedule(dateToForm($scope.firstSunday),dateToForm($scope.nextSaturday));
	console.log($scope.clocks);
	console.log($scope.schedule);
	$scope.container={};
	makeContainerForWeek($scope.clocks,$scope.schedule);
	}
	
	$scope.changeDate = function(){
		
		
		
		
	}
	
	
	//Load real Stuff;
	$scope.days= {};
	$scope.today = new Date();
	$scope.stores = loadProxy.loadDistrict($scope.district);
	//load all the goals and all the users hours
	//$window.userlist = userlist.gethoursworkedbystore(2017,11);
	console.log($scope.today.getDay());
	$scope.firstSunday = new Date($scope.today.getFullYear(),$scope.today.getMonth(),$scope.today.getDate()-$scope.today.getDay());
	$scope.nextSaturday = new Date($scope.today.getFullYear(),$scope.today.getMonth(),$scope.today.getDate()+(6-$scope.today.getDay()));
	console.log(dateToForm($scope.nextSaturday));
	$scope.clocks={};
	$scope.schedule={};
	console.log(dateToForm($scope.firstSunday));
	console.log(dateToForm($scope.nextSaturday));
	$scope.clocks = f.getclockinclockout(dateToForm($scope.firstSunday),dateToForm($scope.nextSaturday),$scope.district);
	
	$scope.schedule = f.getschedule(dateToForm($scope.firstSunday),dateToForm($scope.nextSaturday));
	console.log($scope.schedule);
	$scope.container = {};
	makeContainerForWeek($scope.clocks,$scope.schedule);
	var x1 = document.getElementsByClassName('progress-bar');
	
	
	
	function dateToForm (date){
		return  date.getFullYear()+""+("0"+(date.getMonth()+1)).slice(-2)+("0"+date.getDate()).slice(-2);
	}
	
	function makeContainerForWeek(clocks, schedule){
		var thisStore;
		var thisThing;
		var thisUser;
		var thisHours;
		var thisStart;
		var thisEnd;
		var thisDate;
		$scope.weekdayArray = new Array(7);
		
		$scope.weekdayArray[0] =  "Sunday";
		$scope.weekdayArray[1] = "Monday";
		$scope.weekdayArray[2] = "Tuesday";
		$scope.weekdayArray[3] = "Wednesday";
		$scope.weekdayArray[4] = "Thursday";
		$scope.weekdayArray[5] = "Friday";
		$scope.weekdayArray[6] = "Saturday";
		
		var weekday = new Array(7);
		weekday[0] =  "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";


		for(punch in clocks){
			thisThing = clocks[punch];
			thisStore = thisThing.storename;
			thisUser = thisThing.username;
			thisHours = thisThing.hours;
			thisStart = thisThing.timein;
			thisEnd = thisThing.timeout;
			thisDate = thisThing.date.toString();
			if(typeof $scope.container[thisStore]=='undefined'){
				$scope.container[thisStore] = {};
				
			}
			if(typeof $scope.container[thisStore][thisUser]=='undefined'){
				$scope.container[thisStore][thisUser] ={};
				
				for(var i = 0;i<7;i++){
				var datecode = dateToForm(new Date($scope.today.getFullYear(),$scope.today.getMonth()-1,($scope.today.getDate()-$scope.today.getDay())+i));
				
				var daycode = weekday[($scope.firstSunday.getDay()+i)];
				if(thisUser=="Gurpinder Singh"){
					console.log(daycode);
				}
				$scope.container[thisStore][thisUser][daycode] = {};
				$scope.container[thisStore][thisUser][daycode]['clocks'] = [];
				$scope.container[thisStore][thisUser][daycode]['schedule'] = [];
				
				}
				
			}
			
			
			var thisThingdatecode = new Date(thisDate.substring(0,4),parseInt(thisDate.substring(4,6))-1,thisDate.substring(6,8));
			var timeintemp = {};
			var timeouttemp = {};
			timeintemp = getclockinfo(thisThing['timein']);
			timeouttemp = getclockinfo(thisThing['timeout']);
			
			thisThing['minutesin']= convertclockobj(timeintemp);
			 thisThing['minutesout']=convertclockobj(timeouttemp);
			var timeoutobj = {};
			
		thisThing['left']=(thisThing['minutesin']/9.6);
		thisThing['width']=((thisThing['minutesout']-thisThing['minutesin'])/9.6);
		console.log(thisStore);
		console.log(thisUser);
		console.log($scope.container);
		console.log(thisThingdatecode);
		
			$scope.container[thisStore][thisUser][weekday[thisThingdatecode.getDay()]]['clocks'].push(thisThing);
			
		
		
		
		
	}
	for(sched in schedule){
		thisThing = schedule[sched];
			thisStore = thisThing.storename;
			thisUser = thisThing.username;
			
			thisStart = thisThing.starttime;
			thisEnd = thisThing.endtime;
			thisDate = thisThing.date.toString();
			
			
			if(typeof $scope.container[thisStore]=='undefined'){
				$scope.container[thisStore] = {};
				
			}
			if(typeof $scope.container[thisStore][thisUser]=='undefined'){
				$scope.container[thisStore][thisUser] ={};
				
				for(var i = 0;i<7;i++){
				var datecode = dateToForm(new Date($scope.today.getFullYear(),$scope.today.getMonth(),($scope.today.getDate()-$scope.today.getDay())+i));
				var daycode = weekday[($scope.firstSunday.getDay()+i)];
				
				$scope.container[thisStore][thisUser][daycode] = {};
				$scope.container[thisStore][thisUser][daycode]['clocks'] = [];
				$scope.container[thisStore][thisUser][daycode]['schedule'] = [];
				}
				
			}
			var thisThingdatecode = new Date(thisDate.substring(0,4),parseInt(thisDate.substring(4,6))-1,thisDate.substring(6,8));
			//console.log(thisThingdatecode);
			
			var timeintemp = {};
			var timeouttemp = {};
			timeintemp = getclockinfo(thisThing['starttime']);
			timeouttemp = getclockinfo(thisThing['endtime']);
			
			thisThing['minutesin']= convertclockobj(timeintemp);
			 thisThing['minutesout']=convertclockobj(timeouttemp);
			var timeoutobj = {};
			
		thisThing['left']=thisThing['minutesin']/9.6;
		thisThing['width']=(thisThing['minutesout']-thisThing['minutesin'])/9.6;
			
			$scope.container[thisStore][thisUser][weekday[thisThingdatecode.getDay()]]['schedule'].push(thisThing);
	}
	console.log($scope.container);
	return ;
	}
	
	
	function convertclockobj(timeobj){
		var minutereturn = 0;
		if(timeobj['isnight'] =='PM'&&timeobj['hours']!=12){
			minutereturn = 12*60;
		}
		minutereturn = minutereturn + (timeobj['hours']*60);
		minutereturn = minutereturn + (timeobj['minutes']);
		if(minutereturn>0) 
		return minutereturn;
		return 0;
	}
	
	
	function getclockinfo(timestr){
		var timeReturn = {};
		if(timestr.substring(2,3)==':'){
		timeReturn['hours']= parseInt(timestr.substring(0,2),10);
		timeReturn['minutes']= parseInt(timestr.substring(3,5),10);
		timeReturn['isnight']= timestr.substring(6,8);
		}else
		{
		timeReturn['hours']= parseInt(timestr.substring(0,1),10);
		timeReturn['minutes']= parseInt(timestr.substring(2,4),10);
		timeReturn['isnight']= timestr.substring(5,7);
		}
		return timeReturn;
	}

	
	
}