<cfwebsocket name="mywsobj" onmessage="readThatThing" subscribeto="uploads"/>
<cfwebsocket name="whocares" onmessage="printitout" subscribeto="debugging"/>

<script>
	function printitout(msg){
		console.log(msg.data);
		console.log("lol");
	}
	function readThatThing(msgobj){
		console.log(msgobj.data);
		document.getElementById("counter").innerHTML = msgobj.data;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</script>
<html>
	
	<script type="text/javascript" src="library/fusionchart/js/fusioncharts.js"></script>
<script type="text/javascript" src="library/fusionchart/js/themes/fusioncharts.theme.fint.js"></script>
	<link rel="stylesheet" type="text/css" href="includes/stylesheet2.css">
		<link rel="stylesheet" type="text/css" href="includes/styletables.css">
	    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-route.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-animate.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>






	<script src="/viewScript.js?v=10"></script>
	<script src="/ng/chili.js"></script>
	<script src="/js/items2.js"></script>
	
	<script src="/ng/modal.js"></script>
	<link rel="stylesheet" href="../css/ngDialog.css">
	<link rel="stylesheet" href="../css/ngDialog-theme-default.css">
	<link rel="stylesheet" href="../css/ngDialog-theme-plain.css">
	<script src="/ng/loginctrl.js"></script>
	<script src="/ng/mainctrl.js"></script>
	<script src="/ng/inventoryctrl.js"></script>
	<script src="/ng/doorcount.js"></script>
	<script src="/ng/productctrl.js"></script>
	<script src="/ng/ordercyclectrl.js"></script>
	<script src="/ng/dailyreportctrl.js"></script>
	<script src="/ng/upload.js"></script>
	<script src="/node_modules/ng-file-upload/dist/ng-file-upload.js"></script>
	<script src="/node_modules/ng-file-upload/dist/ng-file-upload-shim.js"></script>
	
	
<script src="../js/ngDialog.js"></script>
	<cfajaxproxy cfc="components.logic" jsclassname="jsLogic" >
	<cfajaxproxy cfc="components.login" jsclassname="jsLogin" >
	<cfajaxproxy cfc="proxy.userLogin" jsclassname="jsLogin2" >
	<cfajaxproxy cfc="proxy.commProxy" jsclassname="jsCommController">
	<cfajaxproxy cfc="proxy.storegoalctrl" jsclassname="jsGoalController">
	<cfajaxproxy cfc="proxy.empgoalctrl" jsclassname="jsEmpController">
	<cfajaxproxy cfc="proxy.SetProductList" jsclassname="jsProductController" >
	<cfajaxproxy cfc="proxy.vendorMapping" jsclassname="jsVendorMappingController" >
	<cfajaxproxy cfc="proxy.SetActivations" jsclassname="jsActivationController" >
	<cfajaxproxy cfc="proxy.doorcountProxy" jsclassname="jsDoorCountController" >
	<cfajaxproxy cfc="proxy.uploadProxy" jsclassname="jsUploadController">


	<cfscript> 
		
</cfscript>
<cflock timeout=20 scope="Session" type="Exclusive"> </cflock>
 
   

	<script type="text/javascript">
	var e = new jsLogin();
	var logicProxy = new jsLogic();
	//var theReturn = e.xyz();
	//var something = e.bad();
	//console.log(something);
	//var sales = e.loadStoresSalesItems();
	//console.log(sales);
	
	//var theSalesList = e.loadSalesList();
	var f = new jsLogin2();
	var productListProxy = new jsProductController();
	var goalProxy = new jsGoalController();
	var doorcountProxy = new jsDoorCountController();
	var commProxy = new jsCommController();
	var uploadProxy = new jsUploadController();
	var empProxy = new jsEmpController();
	var actProxy = new jsActivationController();
	var vendorMappingProxy = new jsVendorMappingController();
	
	//console.log(theReturn);
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
   
  </script>
  <div id="header" >
  	Upload Progress
  	<p id="counter"></p>
  	
  </div>
  
  <body ng-app=ngViewExample>

    	
    		
   <div ng-controller="MainCtrl as user" ng-init="passUserData()" >
   	
   	
	<ul style="float:left" >  
   
   		  <li ng-if="level<=1"><a  href="/Upload">Upload</a></li>
   		  <li ng-if="level<=2"><a  href="/Inventory">Inventory</a></li>
		  <li ng-if="level<=2"><a  href="/ProductControl">Order Control</a></li>
		  <li ng-if="level<=2"><a  href="/DoorCount">Store Traffic</a></li>
		  <!---<li ng-if="level<=2"><a  href="/OrderCycle">Order Cycle</a></li>
		  <li ng-if="level<=1"><a  href="/Stores">Stores</a></li>
		  <li ng-if="level<=1"><a  href="/Activations">Activations</a></li>
		  <li ng-if="level<=1"><a  href="/Comm">Commission</a></li>
		  <li ng-if="level<=1"><a  href="/MTDEmp">Employee</a></li>
		<li ><a  href="/Login">Login</a></li>--->
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
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			xls = SpreadsheetRead('C:\ColdFusion10\cfusion\wwwroot\chilipos\components\savestuff\'&'Receiving Invoices History Report - Invoice For District Sanat From 28-Oct-2016 To 06-Nov-2016 1045173'&'.xls',"sheet1");
	    	
	    	//writedump(getmetadata(xls));
	    	//for( row=3;row<=xls.rowCount;row+=1){
	    		
   				// WriteOutput(SpreadsheetGetCellValue(xls,row,row) & '<br>');
   				 
			//}
			
			//queryService = new query(); 
			 //queryService.setDatasource(xls); 
    		//result = queryService.execute(sql="SELECT * "); 
    		//GetParks = result.getResult(); 
    		//writedump(GetParks);
	    	//SpreadsheetGetCellValue(spreadsheetObj, row, column);		
			logic = createObject("component", "components/login");
			//logic.setUser();
			dumbb = logic.getUser();
			
			userLogin = createObject("component", "proxy/userLogin");
			//Session.shouldntnamethingsthislol = 
			//"i hope it wasnt this";
			
			
		//logic.fixTime();
		//numberStruct = logic.testGet();
		 // writeDump(logic.fixTime());
		//writedump(numberStruct);
			
			
		</cfscript>
		<cfoutput >
			<cfdump var="#dumbb#" >
	
</cfoutput>
		
		
			
		