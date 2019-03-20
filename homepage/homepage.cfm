<!DOCTYPE html>
<html>
<meta charset="utf-8"/>


<cfajaxproxy cfc="homepage.loadforuserproxy" jsclassname="jsLoadForUser" >
		<cfscript>
				username = "";
				password = "";
			if(StructKeyExists(cookie,"username")&&StructKeyExists(cookie,"pass")){
				 username =  cookie.username;
				 password = cookie.pass;
			}
			
			
		</cfscript>
	<link rel="import" href="homepage/imports.html">
<div id="loading"></div> 
</html>
