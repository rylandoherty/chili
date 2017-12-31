<!DOCTYPE html>
<html>
<meta charset="utf-8"/>
<cfscript>
	    		ormReload();
			logic = createObject("component", "pages/logic");


		/*mailService = new mail(
  to = "wiguen@imwireless.net, ryland@imwireless.net",
  from = "DTrump@gov.usa",
  subject = "Presidential Purchase",
  body="Can I buy an Iphone from you?"
);

// Send
mailService.send();
*/

		</cfscript>


		<cfoutput >

</cfoutput>

<cfwebsocket name="mywsobj" onmessage="readThatThing" subscribeto="uploads"/>
<cfwebsocket name="whocares" onmessage="printitout" subscribeto="debugging"/>

	<body>
		<cfajaxproxy cfc="proxy.doorcountProxy" jsclassname="jsDoorCountController" >
		<cfajaxproxy cfc="login.loginProxy" jsclassname="jsLogin" >
		<cfajaxproxy cfc="pages.uploadProxy" jsclassname="jsUploadController">
		<cfajaxproxy cfc="proxy.userlist" jsclassname="jsUserList" >
		<cfajaxproxy cfc="proxy.saveContainerProxy" jsclassname="jsSalesContainer" >
		<cfajaxproxy cfc="proxy.goalformat" jsclassname="jsGoalFormat" >
		<cfajaxproxy cfc="proxy.monthlygoals" jsclassname="jsMonthlyGoal" >
		<cfajaxproxy cfc="proxy.productgroups" jsclassname="jsProductGroups" >
		<cfajaxproxy cfc="proxy.loadRequestProxy" jsclassname="jsLoadController">
		<cflock timeout=20 scope="Session" type="Exclusive"> </cflock>
		<link rel="import" href="imports.html">



<cfset Session.version = "0.0197">



<cfoutput>


		<link rel="stylesheet" type="text/css" href="otherapps/progressbar.css?version=#Session.version#"></link>
	<script src="pages/upload.js?version=#Session.version#"></script>
	<script src="viewScript.js?version=#Session.version#"></script>
	<script src="views/chili.js?version=#Session.version#"></script>
	<script src="services/userlist.js?version=#Session.version#"></script>
	<script src="views/userlist.js?version=#Session.version#"></script>

	<script src="views/goalView.js?version=#Session.version#"></script>
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
	<script src="views/mtd.js?version=#Session.version#"></script>
	<script src="views/admin.js?version=#Session.version#"></script>
	<script src="views/employeereport.js?version=#Session.version#"></script>


		</cfoutput>







		<script src="/notsure/node_modules/ng-file-upload/dist/ng-file-upload.js"></script>
	<script src="node_modules/ng-file-upload/dist/ng-file-upload-shim.js"></script>
	<script src="node_modules/ngclipboard-master/dist/ngclipboard.min.js"></script>














		</link>

	<script type="text/javascript">
			//document.getElementById("counter").innerHTML = "";
			var home = "http://75.143.42.140:8500/notsure/";
			var e = new jsLogin();
			var f = new jsUserList();
			var groupProxy = new jsProductGroups();
			var loadProxy = new jsLoadController();
			var goalformatProxy = new jsGoalFormat();
			var monthlygoalProxy = new jsMonthlyGoal();
			var doorclickProxy = new jsDoorCountController();
			var saveContainer = new jsSalesContainer();

angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
			 console.log(angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />')));
			 			 console.log(window.location.pathname);
		</script>





    	<body ng-app=ngViewExample>



    	<body ng-controller="LoginCtrl as user" ng-init="" >


    		<span style="top:auto; right:auto;" ng-bind="user.name"></span>


    		<script type="application/javascript"  >

    		</script>
    	</body>




























   <div style="right:inherit;top:100;float:left" class="view-animate-container">

    <div ng-view class="view-animate">


</div>
  </div>


<script>

	function printitout(msg){


	}
	function readThatThing(msgobj){
		//console.log(msgobj.data);
		document.getElementById("counter").innerHTML = msgobj.data;
	}
</script>


	</body>

	</body>

</html>