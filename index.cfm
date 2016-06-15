<html>
	<link rel="stylesheet" type="text/css" href="includes/stylesheet2.css">
	
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-route.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-animate.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="/viewScript.js"></script>
	<script src="/ng/chili.js"></script>
	<script src="/js/items2.js"></script>
	<script src="/ng/modal.js"></script>
	<link rel="stylesheet" href="../css/ngDialog.css">
	<link rel="stylesheet" href="../css/ngDialog-theme-default.css">
	<link rel="stylesheet" href="../css/ngDialog-theme-plain.css">
	<script src="/ng/loginctrl.js"></script>
	<script src="/ng/mainctrl.js"></script>
	<script src="/ng/inventoryctrl.js"></script>
	<script src="/ng/productctrl.js"></script>
	<script src="/ng/dailyreportctrl.js"></script>
	<script src="/ng/commctrl.js"></script>
	






<script src="../js/ngDialog.js"></script>
	<cfajaxproxy cfc="components.login" jsclassname="jsLogin" >
	<cfajaxproxy cfc="proxy.userLogin" jsclassname="jsLogin2" >
	<cfajaxproxy cfc="proxy.storegoalctrl" jsclassname="jsGoalController">
	<cfajaxproxy cfc="proxy.empgoalctrl" jsclassname="jsEmpController">
	<cfajaxproxy cfc="proxy.SetProductList" jsclassname="jsProductController" >
	<cfajaxproxy cfc="proxy.SetActivations" jsclassname="jsActivationController" >
	
	<cfscript> 
		

</cfscript>
<cflock timeout=20 scope="Session" type="Exclusive"> </cflock>
    <cfset Session.Name = "Rylan"> 
    <cflock timeout=15 scope="Session" type="Readonly"> 
	</cflock>
	

	<script type="text/javascript">
	var e = new jsLogin();
	//var theReturn = e.xyz();
	//var something = e.bad();
	//console.log(something);
	//var sales = e.loadStoresSalesItems();
	//console.log(sales);
	
	//var theSalesList = e.loadSalesList();
	var f = new jsLogin2();
	var productListProxy = new jsProductController();
	var goalProxy = new jsGoalController();
	var empProxy = new jsEmpController();
	var actProxy = new jsActivationController();
	//console.log(theReturn);
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
   
  </script>
  <div id="header" ></div>
  
  <body ng-app=ngViewExample>


		
    	
    		
   <div ng-controller="MainCtrl as user">
   	
   	
   	
	<ul style="float:left" >  
   
   		  <li ng-if="level<=1"><a  href="/Upload">Upload</a></li>
		  <li ng-if="level<=3"><a  href="/Stores">Stores</a></li>
		  <li ng-if="level<=3"><a  href="/Activations">Activations</a></li>
		  <li ><a  href="/Login">Login</a></li>
		  <li ng-if="level<=2"><a  href="/Inventory">Inventory</a></li>
		 
		  <li ng-if="level<=3"><a  href="/MTDEmp">Employee</a></li>
		  <li ng-if="level<=2"><a  href="/ProductControl">Order Control</a></li>
		  <li ng-if="level<=1"><a  href="/Comm">Commission</a></li>
		
		</ul>



  
  
  <hr/>
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
	
	


	<!--- <cfset selt = ORMExecuteQuery("from Sales where store.storeid=:country", {country='E Bridgewater'}) >
	<cfdump var = "#selt#" top="10">
	 <cfloop array="#selt#" index="artistItem"> 
	 	
    <cfoutput> 
    #selt[1].TYPE#<br> 
    </cfoutput> 
   
    </cfloop>--->
</html>
		<cfscript>
			
	    					
			logic = createObject("component", "components/logic");
			userLogin = createObject("component", "proxy/userLogin");
			
		//logic.fixTime();
		//numberStruct = logic.testGet();
		 // writeDump(logic.fixTime());
		//writedump(numberStruct);
			
			
		</cfscript>
		
		
		
			
		