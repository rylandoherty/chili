<html>
	<link rel="stylesheet" type="text/css" href="includes/stylesheet.css">
	
	
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-route.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-animate.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="/viewScript2.js"></script>
	<script src="/ng/chili.js"></script>
	
	
	

	<cfajaxproxy cfc="components.login" jsclassname="jsLogin" >
	
	<cfscript> 
		 

</cfscript>




	<cflock timeout=20 scope="Session" type="Exclusive"> </cflock>
    <cfset Session.Name = "Rylan"> 
    <cflock timeout=20 scope="Session" type="Readonly"> 
	</cflock>
	

	
	
	
	<script type="text/javascript">
	var e = new jsLogin();
	
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
    
    if(window.location.hash==="#home"){
    	console.log("it was true!");
    }
    console.log(window.location.hash);
  </script>
  
  
<div id="header"> wow </div>



	<body>
		<!---
<cfquery name="qCreateTable"  datasource="greenchili">
    CREATE TABLE Sales (
                            id varchar(255) NOT NULL PRIMARY KEY,
                            store varchar(255),
                            employee varchar(255),
                            customer varchar(255),
                            date varchar(255),
                            cost varchar(255),
                            sales varchar(255),
                            profit varchar(255),
                            financed varchar(255),
                            cash varchar(255),
                            card varchar(255),
                            tradein varchar(255),
                            comments varchar(255)
                            
                            )
</cfquery>--->
		
			
    	<!---<cfset cookieStatus = jslogin.findCookie()>
    	--->
		
    	<body  ng-app=ngViewExample>
    		
		
	
	
	
	<ul>
		
		  <li><a  href="/Stores">Stores</a></li>
		  <li><a  href="/Contact">Contact</a></li>
		  <li><a  href="/About">About</a></li>
		</ul>

<div ng-controller="MainCtrl as main">
 <cfform ng-if="main.$route.current.templateUrl=='upload.cfm'" action="/components/form.cfm" enctype="multipart/form-data" method="post">
 
    <input type="file" name="rq4file" />
    
     <input type="file" name="finfile" />
    <input type="submit" value="Submit" name="submit" />
</cfform> 
  
  <div class="view-animate-container">
    <div ng-view class="view-animate">
    	
    	
</div>
  </div>
  <hr />
<!---
  <pre>$location.path() = {{main.$location.path()}}</pre>
  <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
  <pre>$route.current.params = {{main.$route.current.params}}</pre>
  <pre>$routeParams = {{main.$routeParams}}</pre>
  --->
</div>
</body>
   
		
    	<cfoutput> #StructKeyList(Session)# </cfoutput> 
		
		<div id="footer">hey</div>
	</body>
	<script type="application/javascript" >
		//window.location.hash = ("cows");
	</script>
	


	
</html>