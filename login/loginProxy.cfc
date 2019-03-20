<cfcomponent>
	<cfscript>
			
	remote any function validateAndReturnUser(user, pass){
		
		
		var userData = EntityLoad('userlist', {name=user},true);
		
		
		if(isDefined("userData")){
			
			
				
					
					if(userData.getpassword()== pass){
					cookie.pass = pass;
					cookie.username = user;
					return userData;
					}
					return "Wrong password";
				
			
		}
		
			return "not found";
		
	}
	
	remote any function removeUserCookie(){
		
		StructClear(cookie);
		//StructDelete(cookie, "PASS");
		cookie.username = 0;
		cookie.pass = 0;
		return cookie;
		
	}
	remote any function getHour(){
		var dt = "20170917";
		var emp = "anthony beeso";
		var stor = "Hopkinton MA";
		var dog = EntityLoad('stores', {storeid=stor},true);
		return 0;
	}
	</cfscript>
</cfcomponent>

