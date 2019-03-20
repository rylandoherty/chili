var loadWeekScheduleForDistrict = function(datetype,dateone,datetwo){
	
}
var gethoursbystore = function(year,month,district){
	var userArray = f.getUserList();
	
	}
	
var gethoursbystore = function(year,month,district){
	var userArray = f.getUserList();
	
	
	
	
	
	
	
}

var gethoursformonthfordraw = function(year,month,district){
    	var userArray = f.getUserList();
    	var trainers = {};
    	for(var those in userArray){
    		if(  typeof userArray[those].commissionstartdate !== 'undefined'){
    			trainers[userArray[those].userid] = {};
    			trainers[userArray[those].userid].startdate = 0;
    			var trainingStart = userArray[those].commissionstartdate.toString();
    			trainers[userArray[those].userid].startdate  = new Date(trainingStart.substring(0,4),trainingStart.substring(4,6)-1,trainingStart.substring(6,8))
    			
    			
    		}
    		else{
    			trainers[userArray[those].userid] = {};
    			trainers[userArray[those].userid].startdate = 0;
    			trainers[userArray[those].userid].startdate = new Date (1990,1,1);
    		}
    	}
    	
    	//console.log(trainers);
    	//first day of last month
    	var targetDate = new Date(year,(month-1));
    	var startoffirstweek = new Date(year,(month-1));
    	var endofmonth = new Date(year,(month),1,-1);
    	startoffirstweek.setDate(-1*(targetDate.getDay()-1)); 
    	var weekArray = [];
    	var totalObject = {};
    	totalObject.year = year;
    	totalObject.month = month;
    	totalObject.weekArray = {};
    	totalObject.list = {};
    	var start = startoffirstweek.getFullYear()+""+("0"+(startoffirstweek.getMonth()+1)).slice(-2)+("0"+startoffirstweek.getDate()).slice(-2);
    	var end = endofmonth.getFullYear()+("0"+(endofmonth.getMonth()+1)).slice(-2)+("0"+endofmonth.getDate()).slice(-2);
    	//console.log(start+" "+end);
    	var holiday = ['20180101',
    					'20180528',
    					'20180704',
    					'20180903',
    					'20171009',
    					'20181008',
    					'20181111',
    					'20171111',
    					'20171123',
    					'20181122',
    					'20171225',
    					'20181225'];
    	/*
    	20180101 New Year's Day;
    	20180528 Memorial Day; 
    	20180704 Independence Day;
    	  20180903 Labor Day; 
    	  20171009  Columbus Day 
    	  20181008  Columbus Day 
    	  20181111  Veterans Day 
    	  20171111 Veterans Day 
    	  20171123 Thanksgiving Day
    	  20181122 Thanksgiving Day
    	  20171225  Christmas Day 
    	  20181225 Christmas Day 
			
			*/
    	
    	
    	var currentStartOfWeek = startoffirstweek;
    	var currentEndOfWeek = new Date(year,(month-1));
    	currentEndOfWeek.setDate(targetDate.getDate()+(6-targetDate.getDay()));
    	//console.log(start);
    	//console.log(end);
    	
    	var list2 =f.getclockinclockout(start,end,district);
    	totalObject.list = list2;
    	//var list =f.gethoursworked(start,end);
    	//console.log(list2);
    	//console.log(endofmonth);
    	var totalDraw = {};
    	var stop = 2;
    	var weekcount = 1;
    	do{
    	totalObject.weekArray[dateToForm(currentStartOfWeek)] = {};
    	totalObject.weekArray[dateToForm(currentStartOfWeek)].thisWeekStart = dateToForm(currentStartOfWeek);
    		var hourTable = {};
    		//console.log(list);
    		for(var entries in list2){
    		var datestring = (list2[entries].date)+"";	
    		var isholiday = 0;
    		for(var them in holiday){
	    		 		if(datestring == holiday[them]){
	    		 			isholiday = 1;
	    		 		}
	    		 	}
    		var thisDate = new Date(datestring.substring(0,4),datestring.substring(4,6)-1,datestring.substring(6,8));
    		
    		if(typeof hourTable[list2[entries].username] == 'undefined'){
		    		hourTable[list2[entries].username]= {};
		    		hourTable[list2[entries].username].holidayhours = 0;
		    		hourTable[list2[entries].username].overtimehours = 0;
		    		hourTable[list2[entries].username].hoursworked = 0;
		    		hourTable[list2[entries].username].payforweek = 0;
		    		hourTable[list2[entries].username].drawforweek = 0;
		    		hourTable[list2[entries].username].hoursfordraw = 0;
		    		hourTable[list2[entries].username].holidayfallintodraw = 0;
	    		}
    		
    		
    			
    		
    		if(thisDate<=currentEndOfWeek&&thisDate>=currentStartOfWeek){
    		
	    		
	    		hourTable[list2[entries].username].hoursworked =
	    		 hourTable[list2[entries].username].hoursworked + list2[entries].hours ;
	    		 
	    		 
	    		 if(isholiday){
	    			hourTable[list2[entries].username].holidayhours =
	    			hourTable[list2[entries].username].holidayhours + list2[entries].hours;
	    		 	 hourTable[list2[entries].username].payforweek =
		    		 hourTable[list2[entries].username].payforweek + (list2[entries].hours*6) ;
	    		 }
	    		 if((hourTable[list2[entries].username].hoursworked + list2[entries].hours)<=40){
	    		 	
		    		 hourTable[list2[entries].username].payforweek =
		    		 hourTable[list2[entries].username].payforweek + (list2[entries].hours*12) ;
	    		 }
	    		 else{
	    		 	var dif = hourTable[list2[entries].username].hoursworked - list2[entries].hours;
	    		 	
	    		 	if(dif < 40){
	    		 		hourTable[list2[entries].username].payforweek =
	    				 hourTable[list2[entries].username].payforweek + ((40-dif)*12) ;
	    				 hourTable[list2[entries].username].overtimehours = 
	    				 hourTable[list2[entries].username].overtimehours +(list2[entries].hours - (40 - dif ));
	    			 hourTable[list2[entries].username].payforweek =
	    		 	hourTable[list2[entries].username].payforweek + ((list2[entries].hours - (40 - dif ))*18) ;
	    		 	}
	    		 	else{
	    		 		hourTable[list2[entries].username].overtimehours = 
	    				 hourTable[list2[entries].username].overtimehours + list2[entries].hours;
	    		 	hourTable[list2[entries].username].payforweek =
	    		 	hourTable[list2[entries].username].payforweek + ((list2[entries].hours)*18) ;
	    		 	}
	    		 }
	    		 //console.log(list2[entries].username + "  " + datestring + "  " +hourTable[list2[entries].username].drawforweek  + "  " + list2[entries].hours + "    "+ hourTable[list2[entries].username].hoursworked);
	    		 
    		
    		
    		}
    		//console.log(currentStartOfWeek);
    		if(thisDate<=currentEndOfWeek&&thisDate>=targetDate && weekcount == 1){
    			
    			if(isholiday){
	    				
	    			hourTable[list2[entries].username].holidayhours =
	    			hourTable[list2[entries].username].holidayhours + list2[entries].hours;
	    		 	
	    		 
	    		 }
	    		
	    		hourTable[list2[entries].username].hoursfordraw = hourTable[list2[entries].username].hoursfordraw  + list2[entries].hours; 	
	    		 
	    		}
    		if(thisDate<=currentEndOfWeek&&thisDate>=currentStartOfWeek && weekcount > 1){
    			//console.log(hourTable[list2[entries].username].hoursworked+ "  "+ thisDate);
    			//console.log(list2[entries].username)
    			if(trainers[list2[entries].username].startdate>thisDate){
	    			
	    		}
	    		else{
	    			hourTable[list2[entries].username].hoursfordraw =
	    			hourTable[list2[entries].username].hoursfordraw + list2[entries].hours;
	    			
	    		 if(isholiday){
	    		
	    		 	
	    		 	hourTable[list2[entries].username].drawforweek =
		    		 hourTable[list2[entries].username].drawforweek + (list2[entries].hours*6) ;
	    		 }
	    		 if((hourTable[list2[entries].username].hoursworked + list2[entries].hours )<=40){
	    		 	
		    		 hourTable[list2[entries].username].drawforweek =
		    		 hourTable[list2[entries].username].drawforweek + (list2[entries].hours*12) ;
	    		 }
	    		 else{
	    		 	var dif = hourTable[list2[entries].username].hoursworked - list2[entries].hours;
	    		 	//console.log(list2[entries].username + "  " + datestring + "  " +hourTable[list2[entries].username].drawforweek  + "  " + list2[entries].hours + "    "+ hourTable[list2[entries].username].hoursworked);
	    		 	if(dif < 40){
	    		 		hourTable[list2[entries].username].drawforweek =
	    				 hourTable[list2[entries].username].drawforweek + ((40-dif)*12) ;
	    				// console.log(list2[entries].username + "  " + datestring + "  " +hourTable[list2[entries].username].drawforweek  + "  " + list2[entries].hours + "    "+ hourTable[list2[entries].username].hoursworked);
	    			 hourTable[list2[entries].username].drawforweek =
	    		 	hourTable[list2[entries].username].drawforweek + ((list2[entries].hours - (40 - dif ))*18) ;
	    		 	//console.log(list2[entries].username + "  " + datestring + "  " +hourTable[list2[entries].username].drawforweek  + "  " + list2[entries].hours + "    "+ hourTable[list2[entries].username].hoursworked);
	    		 	}
	    		 	else{
	    		 	hourTable[list2[entries].username].drawforweek =
	    		 	hourTable[list2[entries].username].drawforweek + ((list2[entries].hours)*18) ;
	    		 	}
	    		 }
	    		 //console.log(list2[entries].username + "  " + datestring + "  " +hourTable[list2[entries].username].drawforweek  + "  " + list2[entries].hours + "    "+ hourTable[list2[entries].username].hoursworked);
	    		 }
    		}
    			
    		
    		}
    		if(weekcount == 1){ 
    			for(var each in hourTable ){
    				hourTable[each].drawforweek = hourTable[each].drawforweek + hourTable[each].holidayhours * 6;
    				if(hourTable[each].hoursworked<=40){
    					hourTable[each].drawforweek = hourTable[each].drawforweek + ((hourTable[each].hoursfordraw) * 12);
    				}
    				else{
    					hourTable[each].drawforweek = hourTable[each].drawforweek +(hourTable[each].hoursfordraw*12)+(hourTable[each].overtimehours*6);
    				}
    				
    			}
    		}
    		//console.log(currentStartOfWeek);
    		//console.log(currentEndOfWeek);
    		weekcount = weekcount + 1;
    		totalObject.weekArray[dateToForm(currentStartOfWeek)].hourTable = hourTable;
    		currentStartOfWeek.setDate(currentStartOfWeek.getDate()+7);
    		currentEndOfWeek.setDate(currentEndOfWeek.getDate()+7);
    		
    		//console.log(hourTable);
    		
    		weekArray.push(hourTable);
    		if(currentEndOfWeek>=endofmonth){
    			stop=stop-1;
    		}
    	
    	}while(stop);
    	
    	
    	
    	//console.log(weekArray);
    	for(var week in weekArray){
    		//console.log(weekArray[week]);
    		
    		var thisweek = weekArray[week];
    		for(var emp in thisweek){
    			//console.log(thisweek[emp]);
    			var empl = thisweek[emp];
    			//console.log(emp);
    			if(typeof totalDraw[emp] == 'undefined'){
    		totalDraw[emp] = 0 ;
    		}
    			totalDraw[emp] = totalDraw[emp] + empl.drawforweek;
    		}
    	}
    	totalObject.totalDraw = {};
    	totalObject.totalDraw = totalDraw;
    	
    	return totalObject;
    }
   var dateToForm = function (date){
		return  date.getFullYear()+""+("0"+(date.getMonth()+1)).slice(-2)+("0"+date.getDate()).slice(-2);
	}
	
   var  gethoursworkedbystore = function(year,month){
    	
    	var targetDate = new Date(year,(month-1));
    	var startoffirstweek = new Date(year,(month-1));
    	var endofmonth = new Date(year,(month),1,-1);
    	startoffirstweek.setDate(-1*(targetDate.getDay()-1)); 
    	var weekArray =[];
    	var start = startoffirstweek.getFullYear()+""+("0"+(startoffirstweek.getMonth()+1)).slice(-2)+("0"+startoffirstweek.getDate()).slice(-2);
    	
    	var end = endofmonth.getFullYear()+("0"+(endofmonth.getMonth()+1)).slice(-2)+("0"+endofmonth.getDate()).slice(-2);
    	
    	
    	var hourList = f.gethoursworked(start,end);
    	var hourTable = {};
    	
    	for(entries in hourList){
    		if(typeof hourTable[hourList[entries].store] == 'undefined'){
    		hourTable[hourList[entries].store] = {} ;
    		}
    		if(typeof hourTable[hourList[entries].store][hourList[entries].user] == 'undefined'){
    		hourTable[hourList[entries].store][hourList[entries].user]= {};
    		hourTable[hourList[entries].store][hourList[entries].user].hoursworked = 0;
    		}
    		
    		hourTable[hourList[entries].store][hourList[entries].user].hoursworked =
    		 hourTable[hourList[entries].store][hourList[entries].user].hoursworked + hourList[entries].hoursclocked ;
    		
    	}
    	return hourTable;
    }