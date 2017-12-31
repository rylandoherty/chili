
<cfscript>
				username = "";
				password = "";
				
			if(StructKeyExists(cookie,"username")&&StructKeyExists(cookie,"pass")){
				 username =  cookie.username;
				 password = cookie.pass;
				
			}
			
			
		</cfscript>
<cfoutput >
		
	
		<script type="text/javascript" >
				
					var userInput = document.getElementById("userid");
					var passInput = document.getElementById("psw");
					
					
					
					
					
					if("#username#".length>3){
						userInput.value = "#username#";
						passInput.value = "#password#";
						
						//result = "name":"#username#",pass:"#password#";
						
						
						}
					
					</script>
					
		</cfoutput>
		
	<link rel="stylesheet" type="text/css" href="../notsure/stylesheet/loginmodal.css">
		<link rel="stylesheet" type="text/css" href="../notsure/stylesheet/loadingspinner.css">
	
		<link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
		


		
	
		
				
				<div  id="logininput">
					
	<form ng-submit="">
User name:<br>
<input type="text" id="userid" placeholder="RQusername">
<br>
User password:<br>
<input type="password" id="psw" placeholder="Password">
	<input type="submit" value="Login"  ng-click =" passUserData()">

</form>
	
</div>
<span>
	Upload List
	<table>
		<tr>
			<th>Type</th>
			<th>Upload Name</th>
			<th>Date</th>
		</tr>
		<tr ng-repeat= "items in uploadtypes ">
			
		</tr>
	</table>
	
	
</span>
		<div ng-bind="load2"></div>		
			
			
			
			<button ng-click="deleteCookie()" >
				Not you? Logout
				
			</button>
			
	
			
		
		
		
		
				