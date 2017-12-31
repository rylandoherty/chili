<cfcomponent>
	<cfscript>
			
	remote any function validateAndReturnUser(user, pass){
		
		
		var userData = EntityLoad('userlist');
		
		
		if(isDefined("userData")){
			
			for(var dem in userData){
				if(dem.getuserid() == user){
					
					if(dem.getpassword()== pass){
					cookie.pass = pass;
					cookie.username = user;
					return dem;
					}
					return "wrong pass";
				}
			}
		}
		
			return "not found";
		
	}
	remote void function removeUserCookie(){
		StructDelete (cookie, "username");
		StructDelete (cookie, "pass");
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

