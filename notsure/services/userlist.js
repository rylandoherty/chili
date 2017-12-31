

    
   angular.module('userlistService', [])
			.service('userlist', function () {
	var userList;
	
    return {getuserList: function () {
                
                return userList;
            },
	loaduserList: function() {
                userList = f.getUserList();
                
            },
    setpassword: function(user,password) {
                f.setpassword(user,password);
                
    },
    deleteuser: function(user) {
                f.deleteuser(user);
                
    },
    hideuserfromreporting: function(deleteuser) {
                f.hideuserfromreporting(deleteuser);
                
    }, 
    changeaccesslevel: function(user,level){
    			f.changeaccesslevel(user,level);
    },
   
    gethoursformonthfordraw: function(year,month){
    	var targetDate = new Date(year,(month-1));
    	var startoffirstweek = new Date(year,(month-1));
    	var endofmonth = new Date(year,(month),1,-1);
    	startoffirstweek.setDate(-1*(targetDate.getDay()-1)); 
    	var weekArray =[];
    	var start = startoffirstweek.getFullYear()+""+("0"+(startoffirstweek.getMonth()+1)).slice(-2)+("0"+startoffirstweek.getDate()).slice(-2);
    	
    	var end = endofmonth.getFullYear()+("0"+(endofmonth.getMonth()+1)).slice(-2)+("0"+endofmonth.getDate()).slice(-2);
    	//console.log(start+" "+end);
    	
    	
    	var currentStartOfWeek = startoffirstweek;
    	var currentEndOfWeek = new Date();
    	currentEndOfWeek.setDate(targetDate.getDate()+(6-targetDate.getDay()));
    	//console.log(start);
    	//console.log(end);
    	
    	var list =f.gethoursworked(start,end);
    	//console.log(list);
    	//console.log(endofmonth);
    	var totalDraw = {};
    	while(currentEndOfWeek<=endofmonth){
    		var hourTable = {};
    		//console.log(list);
    		for(var entries in list){
    		var datestring = (list[entries].date)+"";	
    		//console.log(currentStartOfWeek);
    	
    		
    		var thisDate = new Date(datestring.substring(0,4),datestring.substring(4,6)-1,datestring.substring(6,8));
    		
    		if(thisDate<=currentEndOfWeek&&thisDate>=currentStartOfWeek){
    			//console.log(thisDate);	
    		if(typeof hourTable[list[entries].user] == 'undefined'){
    		hourTable[list[entries].user]= {};
    		hourTable[list[entries].user].hoursworked = 0;
    		hourTable[list[entries].user].drawforweek = 0;
    		}
    		hourTable[list[entries].user].hoursworked =
    		 hourTable[list[entries].user].hoursworked + list[entries].hoursclocked ;
    		 if(hourTable[list[entries].user].hoursworked<40){
    		 hourTable[list[entries].user].drawforweek =
    		 hourTable[list[entries].user].drawforweek + (list[entries].hoursclocked*12) ;
    		 }
    		 else{
    		 	var dif = hourTable[list[entries].user].hoursworked - list[entries].hoursclocked;
    		 	if(dif < 40){
    		 		hourTable[list[entries].user].drawforweek =
    		 hourTable[list[entries].user].drawforweek + ((40-dif)*12) ;
    		 	}
    		 	hourTable[list[entries].user].drawforweek =
    		 hourTable[list[entries].user].drawforweek + ((list[entries].hoursclocked - (40 - dif ))*18) ;
    		 }
    		}
    		}
    		currentStartOfWeek.setDate(currentStartOfWeek.getDate()+7);
    		currentEndOfWeek.setDate(currentEndOfWeek.getDate()+7);
    		//console.log(hourTable);
    		weekArray.push(hourTable);
    		
    	}	
    	
    	
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
    	return(totalDraw);
    },
    
    gethoursworkedbystore: function(year,month){
    	
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
    },
    gethoursworkedfortarget: function(type,target){
    	//thiswillget a specific store, region, user, district
    }
    
     }
    });