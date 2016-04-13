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

<script src="../js/ngDialog.js"></script>
	<cfajaxproxy cfc="components.login" jsclassname="jsLogin" >
	<cfajaxproxy cfc="proxy.userLogin" jsclassname="jsLogin2" >
	<cfajaxproxy cfc="proxy.SetProductList" jsclassname="jsProductController" >
	<cfscript> 
		

</cfscript>
<cflock timeout=20 scope="Session" type="Exclusive"> </cflock>
    <cfset Session.Name = "Rylan"> 
    <cflock timeout=20 scope="Session" type="Readonly"> 
	</cflock>
	

	
	
	
	<script type="text/javascript">
	var e = new jsLogin();
	var theReturn = e.xyz();
	var theInv = e.loadInventory();
	var theProductList = e.loadProductList();
	var f = new jsLogin2();
	var productListProxy = new jsProductController();
	
	//console.log(theReturn);
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
   
  </script>
  
  
<div id="header"><button type="button" ng-dialog="firstDialogId" ng-dialog-controller="InsideCtrl" ng-dialog-data="{{jsonData}}" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false">Open via directive</button> wow </div>

	<body>
		
		
		
		
    	<body  ng-app=ngViewExample>
    		
   <div ng-controller="MainCtrl as user">
	<ul>  
   
   		  <li><a  href="/Upload">Upload</a></li>
		  <li><a  href="/Stores">Stores</a></li>
		  <li><a  href="/Login">Login</a></li>
		  <li><a  href="/Inventory">Inventory</a></li>
		  <li><a  href="/Order">Order</a></li>
		  <li><a  href="/ProductControl">Product Control</a></li>
		  <li><a  href="/Customers">Customers</a></li>
		  <li><a  href="/About">About</a></li>
		</ul>



  
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
			
			logic = createObject("component", "components/logic");
			userLogin = createObject("component", "proxy/userLogin");
		//logic.fixTime();
		//numberStruct = logic.testGet();
		 // writeDump(logic.fixTime());
		//writeOutput(numberStruct);
			
			
		</cfscript>
		
		
		
			
		