<cfcomponent>
	<cfscript>
			
		remote any function getUserList(){
		
		
			var userData = EntityLoad('userlist');
			
			
			if(isDefined("userData")){
				return userData;
			}
		}
		remote any function setpassword(user,pw){
			var userData = EntityLoad('userlist',user['userid'],true);
			userData.setpassword(pw['new']);
		}
		
		remote any function getschedule(from,to){
			//var hourData = EntityLoad('hoursworked', { yearmonth=something });
			var dateList = ORMExecuteQuery("from storeschedule where date<="&to&" and date>="&from);
			
			if(isDefined("dateList")){
				return dateList;
			}
		}
		
		remote any function getclockinclockout(from,to,district){
			var districtLoad = entityLoad('district',district,true);
			var keys = districtLoad.getstores();
			var keyArray = [];
			for(key in keys){
				ArrayAppend(keyArray,key.getstoreid());
			}
			var dateList = ORMExecuteQuery("from clockinclockout where date<="&to&" and date>="&from&" and storename in (:keylist)",{keylist=keyArray});
			if(isDefined("dateList")){
				return dateList;
			}
			return "Error";
		}
		
		remote any function gethoursworked(from,to){
			//var hourData = EntityLoad('hoursworked', { yearmonth=something });
			var dateList = ORMExecuteQuery("from hoursworked where date<="&to&" and date>="&from);
			
			if(isDefined("dateList")){
				return dateList;
			}
		}
		
		
	</cfscript>
</cfcomponent>

