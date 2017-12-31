
<cfscript>
	
</cfscript>
<!---<iframe seamless="seamless" style="width: 100%; border: none; display: block; max-width: 768px; height: 600px;" src="https://getyarn.io/yarn-clip/embed/7039fab1-8811-43f3-8552-68f74fd994e8?autoplay=false"> </iframe>
<script>--->

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</script>
<html>

	<script type="text/javascript" src="../library/fusionchart/js/fusioncharts.js"></script>
<script type="text/javascript" src="../library/fusionchart/js/themes/fusioncharts.theme.fint.js"></script>
	<link rel="stylesheet" type="text/css" href="../includes/stylesheet2.css">
		<link rel="stylesheet" type="text/css" href="../includes/styletables.css">
	    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
				<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-route.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-animate.js"></script>	

  <link rel="stylesheet" href="../resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script src="https://cdn.rawgit.com/zenorocha/clipboard.js/master/dist/clipboard.min.js"></script>




	<script src="../doorsonly/viewscript.js?v=12"></script>
	
	
	
	

	<script src="../doorsonly/mainctrl.js?version=100"></script>
	<script src="../doorsonly/doorcount.js?version=100"></script>
	
	
	<cfajaxproxy cfc="proxy.userLogin" jsclassname="jsLogin2" >
	<cfajaxproxy cfc="proxy.login" jsclassname="jsLogin" >
	<cfajaxproxy cfc="proxy.doorcountProxy" jsclassname="jsDoorCountController" >
	<cfajaxproxy cfc="proxy.loadRequestProxy" jsclassname="jsLoadController">


	
<cflock timeout=20 scope="Session" type="Exclusive"> </cflock>
 
   

	<script type="text/javascript">
	
	//var theReturn = e.xyz();
	//var something = e.bad();
	//console.log(something);
	//var sales = e.loadStoresSalesItems();
	//console.log(sales);
		var e = new jsLogin();
	//var theSalesList = e.loadSalesList();
	var f = new jsLogin2();
	var doorcountProxy = new jsDoorCountController();
	var loadProxy = new jsLoadController();
	
	
	
	//console.log(theReturn);
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
    
 // window.location.href = "/doorsonly/DoorCount";
  </script>
 
  <body ng-app=ngViewExample>

    	
   <div ng-controller="MainCtrl as user" ng-init="passUserData()" >
   	
   	


  
  
  
<!---
  <pre>$location.path() = {{main.$location.path()}}</pre>
  <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
  <pre>$route.current.params = {{main.$route.current.params}}</pre>
  <pre>$routeParams = {{main.$routeParams}}</pre>
  <cfoutput> #StructKeyList(Session)# </cfoutput> 
  --->
  </div>



   <div style="right:inherit;top:100;float:left" class="view-animate-container">
   		
    <div ng-view class="view-animate">
    	
    	 
</div>
  </div>
		
    	
		
		
	</body>
	
	<script>
		location.hash = "/DoorCount";
	</script>


	<!--- <cfset selt = ORMExecuteQuery("from Sales where store.storeid=:country", {country='E Bridgewater'}) >
	<cfdump var = "#selt#" top="10">
	 <cfloop array="#selt#" index="artistItem"> 
	 	
    <cfoutput> 
    #selt[1].TYPE#<br> 
    </cfoutput> 
   
    </cfloop>--->
    
</html>
