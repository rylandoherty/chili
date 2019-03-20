<!DOCTYPE html>
<html>
<meta charset="utf-8"/>
<cfscript>
	    		ormReload();
			logic = createObject("component", "pages/logic");
</cfscript>


<cfwebsocket name="mywsobj" onmessage="readThatThing" subscribeto="uploads"/>


	<body>
		<cfajaxproxy cfc="proxy.vendorrebateProxy" jsclassname="jsContractController" >
		<cfajaxproxy cfc="proxy.rhiproxy" jsclassname="jsRhiController" >
		<cfajaxproxy cfc="proxy.accproxy" jsclassname="jsAccCartController" >
		<cfajaxproxy cfc="proxy.cashproxy" jsclassname="jsCashController" >
		<cfajaxproxy cfc="proxy.invoiceProxy" jsclassname="jsInvoiceController" >
		<cfajaxproxy cfc="proxy.doorcountProxy" jsclassname="jsDoorCountController" >
		<cfajaxproxy cfc="login.loginProxy" jsclassname="jsLogin" >
		<cfajaxproxy cfc="pages.uploadProxy" jsclassname="jsUploadController">
		<cfajaxproxy cfc="proxy.orderingProxy" jsclassname="jsOrdering">
		<cfajaxproxy cfc="proxy.userlist" jsclassname="jsUserList" >
		<cfajaxproxy cfc="proxy.saveContainerProxy" jsclassname="jsSalesContainer" >
		<cfajaxproxy cfc="proxy.goalformat" jsclassname="jsGoalFormat" >
		<cfajaxproxy cfc="proxy.monthlygoals" jsclassname="jsMonthlyGoal" >
		<cfajaxproxy cfc="proxy.productgroups" jsclassname="jsProductGroups" >
		<cfajaxproxy cfc="proxy.loadRequestProxy" jsclassname="jsLoadController">
		<cfajaxproxy cfc="proxy.samproxy" jsclassname="jsSamController">
		<cflock timeout=20 scope="Session" type="Exclusive"> </cflock>
		
		<link rel="import" href="imports.html">


<cfset Session.version = "0.1226">



<cfoutput>
	  
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="stylesheet/orderstyle.css?version=#Session.version#"></link>
<link rel="stylesheet" type="text/css" href="stylesheet/navbar.css?version=#Session.version#"></link>
		<link rel="stylesheet" type="text/css" href="otherapps/progressbar.css?version=#Session.version#"></link>
	<script src="pages/upload.js?version=#Session.version#"></script>
	<script src="viewScript.js?version=#Session.version#"></script>
	
	
	
	<script src="node_modules/clipboard.js-master/dist/clipboard.js"></script>
	<script src="node_modules/ngclipboard-master/dist/ngclipboard.min.js"></script>
	<script src="views/userguide.js?version=#Session.version#"></script>
	<script src="directives/tree.js?version=#Session.version#"></script>
	<script src="views/rhispage.js?version=#Session.version#"></script>
	<script src="views/acccart.js?version=#Session.version#"></script>
	<script src="views/chili.js?version=#Session.version#"></script>
	<script src="views/contract.js?version=#Session.version#"></script>
	<script src="views/samsinventory.js?version=#Session.version#"></script>
	<script src="views/calllist.js?version=#Session.version#"></script>
	<script src="views/ordering.js?version=#Session.version#"></script>
	<script src="views/links.js?version=#Session.version#"></script>
	<!---<script src="views/userphonecheck.js?version=#Session.version#"></script>--->
	<script src="views/operationallog.js?version=#Session.version#"></script>
	<script src="views/logrecord.js?version=#Session.version#"></script>
	<script src="views/ActError.js?version=#Session.version#"></script>
	<script src="services/userlist.js?version=#Session.version#"></script>
	<script src="views/userlist.js?version=#Session.version#"></script>
	<script src="views/draw.js?version=#Session.version#"></script>
	<script src="views/goalView.js?version=#Session.version#"></script>
	<script src="views/doorcount.js?version=#Session.version#"></script>
	<script src="views/usersettings.js?version=#Session.version#"></script>
	<script src="views/goalformat.js?version=#Session.version#"></script>
	<script src="views/storegoals.js?version=#Session.version#"></script>
	<script src="services/employeeclock.js?version=#Session.version#"></script>
	<script src="services/loadSalesContainer2.js?version=#Session.version#"></script>
	<script src="services/loadSalesContainer.js?version=#Session.version#"></script>
	<script src="views/formulaproductgroup.js?version=#Session.version#"></script>
	<script src="login/loginScript.js?version=#Session.version#"></script>
	<script src="views/user.js?version=#Session.version#"></script>
	<script src="views/ProductGroups.js?version=#Session.version#"></script>
	<script src="views/manager.js?version=#Session.version#"></script>
	<script src="views/monthlygoals.js?version=#Session.version#"></script>
	<script src="views/monthlygoals2.js?version=#Session.version#"></script>
	<script src="views/mtd.js?version=#Session.version#"></script> 
	<script src="views/mtd2.js?version=#Session.version#"></script>
	<script src="views/admin.js?version=#Session.version#"></script>
	<script src="views/employeereport.js?version=#Session.version#"></script>
	<script src="views/dailyreport.js?version=#Session.version#"></script>
	<script src="views/commView.js?version=#Session.version#"></script>
	
	
	
	<script src="node_modules/ngclipboard-master/dist/ngclipboard.min.js"></script>
	
	

		</cfoutput>


		<script src="node_modules/ng-file-upload/dist/ng-file-upload.js"></script>
	<script src="node_modules/ng-file-upload/dist/ng-file-upload-shim.js"></script>
	



		</link>

	<script type="text/javascript">
			//document.getElementById("counter").innerHTML = "";
			var home = "http://75.143.42.140:8500/";
			var e = new jsLogin();
			var f = new jsUserList();
			var accCartProxy = new jsAccCartController();
			var contractProxy = new jsContractController();
			var samProxy = new jsSamController();
			var rhi = new jsRhiController();
			var invoiceProxy = new jsInvoiceController();
			var cashProxy = new jsCashController();
			var groupProxy = new jsProductGroups();
			var orderProxy = new jsOrdering();
			var loadProxy = new jsLoadController();
			var goalformatProxy = new jsGoalFormat();
			var monthlygoalProxy = new jsMonthlyGoal();
			var doorclickProxy = new jsDoorCountController();
			var saveContainer = new jsSalesContainer();

angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
			console.log("loading page");
		</script>


<cfscript>
				username = "";
				password = "";
			if(StructKeyExists(cookie,"username")&&StructKeyExists(cookie,"pass")){
				 username =  cookie.username;
				 password = cookie.pass;
			}
			
			
</cfscript>



    	<body style=" margin-left:20px" ng-app=ngViewExample>
<cfoutput >


    	<body ng-controller="LoginCtrl as dog" ng-init="passUserData('#username#','#password#')" >

<script type="text/javascript" src="stylesheet/HTML.JS" >
	</script>

		<div ng-if="(user.name.length)" ng-click="deleteCookie()">
				
					Logout {{user.name}} <div id="printlog"> </div>
				</div>
    		
<body >

<div class="navbar" ng-if="(user.name.length)">
	
   <a ng-if="user.level<=3"  href="/##/Admin">Invoices</a>
  <a ng-if="user.level<=3"  href="/##/mtd2">MTD</a>
  <a ng-if="user.level<=-1"  href="/##/mtd">MTD2</a>
  <a ng-if="user.level<=3" href="/##/MonthlyGoals">BYB</a>
  <a ng-if="user.level<=3" href="/##/MonthlyGoals2">Forcast</a>
  <a ng-if="user.level<=3"  href="/##/DailyReport">Daily Report</a>
  <a ng-if="user.level<=3" href="/##/Ordering">Inventory</a>

  <a ng-if="user.level<=1"  href="/##/Contract">Contracts</a>
  
  <div class="dropdown">
    <button class="dropbtn" onclick="myFunction()">Other
      <i class="fa fa-caret-down"></i>
    </button>
    <div style=" z-index:3;" class="dropdown-content" id="myDropdown">
    	<a ng-if="user.level<=2"  href="/##/AccCart">Accessory Cart</a>
    	 <a ng-if="user.level<=3"  href="/##/Draw">Draw</a>
    	
     	
		<a ng-if="user.level<=4" href="/##/commview">Forecast</a>	
		
		
		<a  ng-if="user.level<=3" href="/##/usersettings">Change Password</a>
		<a  ng-if="user.level<=1" href="/##/UserList">userlist</a>
		<a  ng-if="user.level<=1" href="/##/OpList">OpLog</a>
		<a ng-if="user.level<=1" href="/##/Upload">Upload</a>
    	 <a ng-if="user.level<=1" href="/##/ActError">Activation Error</a>
		
    </div>
  </div> 
  
 
  <a ng-if="user.level<=3" href="/##/Links">Important Links</a>
  <a ng-if="user.level<=3" href="/##/Schedule">Schedule</a>
  <a ng-if="user.level<=1" href="/##/Phobio">Phobio</a>
  <a ng-if="user.level<=3"  href="/##/UserGuide">UserGuide</a>
  
   <div ng-if="user.level<=1" class="dropdown">
    <button class="dropbtn" onclick="myFunction()">ADMIN
      <i class="fa fa-caret-down"></i>
    </button>
    <div style=" z-index:3;" class="dropdown-content" id="myDropdown">
    	
		
    </div>
  </div> 
  <div ng-if="user.level<=1" class="dropdown">
    <button class="dropbtn" onclick="ryFunction()">Rylan
      <i class="fa fa-caret-down"></i>
    </button>
    <div style=" z-index:3;" class="dropdown-content" id="ryDropdown">
    	<a ng-if="user.level<=1" href="/##/DoorCount">DoorCount</a>
    	<a ng-if="user.level<=1" href="/##/commview">commview</a>	
    	<a ng-if="user.level<=1"  href="/##/goalformat">goalformat</a>
    	<a ng-if="user.level<=1" href="/##/ProductGroups">ProductGroups</a>
    	<a ng-if="user.level<=1" href="/##/formulaproductgroup">formulaproductgroup</a>
    	 <a ng-if="user.level<=-5"  href="/##/LogRecord">Log Record</a>
    	
    </div>
  </div> 
  
  
   
</div>


<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function ryFunction() {
    document.getElementById("ryDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
</script>
</body>
			

    		<div class="ng-cloak">
    		
    	
		
   		<a ng-if="user.level<=-1" href="/##/UserList">User Summary</a>
		
		
			
			
		<a ng-if="user.level<=-3"  href="/##/goalView">Commission/Draw</a>
		
   		<a ng-if="user.level<=-1" href="/##/StoreGoals">Store Goals</a>
		
		
		<a ng-if="user.level<=-3" href="/##/UsedPhoneCheck">Used Phones / Return Checklist</a>
		
		<a ng-if="user.level<=-3" href="/##/CallList">Customer Call List</a>
   		
		
		
		
		</div>
		  <!---<li ng-if="level<=2"><a  href="/OrderCycle">Order Cycle</a></li>
		  <li ng-if="level<=1"><a  href="/Stores">Stores</a></li>
		  <li ng-if="level<=1"><a  href="/Activations">Activations</a></li>
		 
		  <li ng-if="level<=1"><a  href="/MTDEmp">Employee</a></li>--->
		
		

    	
<style >
		.centered {
  position: fixed; /* or absolute */
  top: 40%;
  left: 40%;
}
	</style>	
	
		

		
				
				<div ng-if="!(user.name.length)" class="centered"  id="logininput">
					
	<form ng-submit="">
		User name:<br>
		<input type="text" id="userid" placeholder="Firstname Lastname">
<br>
User password:<br>
<input type="password" id="psw" placeholder="Password"><br/>
	<input id="login" type="submit" value="Login"  ng-click ="passUserData('','')">
	<div id="login" type="submit" value="Login" ></div>
</form>
	<div ng-bind="load2"></div>	
	<!---<button ng-click="sendPassword()" >Email Password </button>--->
</div>

</body>

</cfoutput>
   <div style="right:inherit;top:100;float:left" class="view-animate-container">
	<cfscript>
				
				
			
			
			
		</cfscript>
		<span id="demo"></span>
		<cfoutput>
		<script type="text/javascript" >
			
    	
    
</script>
</cfoutput>
		
	
    <div ng-view class="view-animate">


</div>
  </div>


<script>

	
	function readThatThing(msgobj){
		console.log(msgobj.data);
		document.getElementById("printlog").innerHTML = msgobj.data;
	
	
	}
	
</script>


	</body>

	</body>

</html>