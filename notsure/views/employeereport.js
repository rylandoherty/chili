

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
	$scope.district = "District Sanat";
	//Load real Stuff;
	$scope.days= {};
	$scope.today = new Date();
	$scope.stores = loadProxy.loadDistrict($scope.district);
	//load all the goals and all the users hours
	$window.userlist = userlist.gethoursworkedbystore(2017,11);
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
				var datecode = dateToForm(new Date($scope.today.getFullYear(),$scope.today.getMonth(),($scope.today.getDate()-$scope.today.getDay())+i));
				console.log($scope.firstSunday.getDay()+i);
				var daycode = weekday[($scope.firstSunday.getDay()+i)];
				console.log(daycode);
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
			console.log(thisThingdatecode);
			
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