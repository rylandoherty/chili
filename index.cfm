<html>
	<link rel="stylesheet" type="text/css" href="includes/stylesheet.css">
	
	
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-route.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-animate.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="/viewScript2.js"></script>
	<script src="/ng/chili.js"></script>
	<script src="/js/items2.js"></script>
	
	

	<cfajaxproxy cfc="components.login" jsclassname="jsLogin" >
	
	<cfscript> 
		

</cfscript>




	<cflock timeout=20 scope="Session" type="Exclusive"> </cflock>
    <cfset Session.Name = "Rylan"> 
    <cflock timeout=20 scope="Session" type="Readonly"> 
	</cflock>
	

	
	
	
	<script type="text/javascript">
	var e = new jsLogin();
	var theReturn = e.xyz();
	//console.log(theReturn);
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
   
  </script>
  
  
<div id="header"> wow </div>



	<body>
		
		
    	<body  ng-app=ngViewExample>
    		
		
	
	
	
	<ul>
		
		  <li><a  href="/Stores">Stores</a></li>
		  <li><a  href="/Contact">Contact</a></li>
		  <li><a  href="/About">About</a></li>
		</ul>

<div ng-controller="MainCtrl as main">

  
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
  <cfoutput> #StructKeyList(Session)# </cfoutput> 
  --->
</div>
</body>
   
		
    	
		
		<div id="footer"></div>
	</body>
	
	


	
</html>
		<cfscript>
			 dateRQ = "November 3, 2016 2:56 PM";
			dateArray= [];
			 month ="";
			 day ="";
			 year= "";
			 time= "";
			 count = 1;
			for( i=1;i<Len(dateRQ);i++){
					if(dateRQ.charAt(i)==" "){
						
						writeOutput(dateRQ.charAt(i)&"YES"&i);
						if(count == 1){
							month = left(dateRQ,i);
							count++;
						}
						else if(count == 2){
							if(dateRQ.charAt(i-3)==" "){
								
								day = dateRQ.charAt(i-2);
							}
							else{
								day = mid(dateRQ,i-2,2);
							}
							count++;
						}
						else if(count == 3){
							year = mid(dateRQ,i-3,4);
							count++;
						}
						else if(count == 4){
							if(dateRQ.charAt(i-5)==" "){
							time = mid(dateRQ,i-3,7);	
							}
							else{
							time = mid(dateRQ,i-4,8);	
							}
							
						}
						
					}
				
			}
			writeoutput('<br/>'&month&'<br/>');
			writeoutput(day&'<br/>');
			writeoutput(year&'<br/>');
			writeoutput(time&'<br/>');
		</cfscript>
		
		
		
			
		