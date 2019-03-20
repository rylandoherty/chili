<html>
	<meta charset="utf-8"/>
	<base href="">
	<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script>
	<cfscript>
	    		ormReload();
			logic = createObject("component", "drone/pages/logic");
	</cfscript>
	<link rel="import" href="imports.html">
	
<cfajaxproxy cfc="proxy.uploadProxy" jsclassname="jsUploadController" >


<cfset Session.version = "0.1089">





<script src="node_modules/ng-file-upload/dist/ng-file-upload.js"></script>
<script src="node_modules/ng-file-upload/dist/ng-file-upload-shim.js"></script>
<script src="droneNg.js?version=#Session.version#"></script>
<script src="view/upload.js?version=#Session.version#"></script>
<script src="view/spots.js?version=#Session.version#"></script>
<script type="text/javascript">
			
			var uploadProxy = new jsUploadController();
			
var path = "/" + window.location.pathname.split('/')[1];
  console.log(path
);

		</script>



<cfoutput>
	
	<body style=" background-image: url(background.jpg)">
		<div ng-app="myApp" ng-controller="DogCtrl">







	<div style=" width: 10%; height: 20%">
	<div style=" display: flex;">
		
		<list >
			 <li> <a href="##/spots"><button>Videos</button></a> </li>
			 <li> <a href="##/upload"><button>Upload </button></a> </li>
			 
		</list>
	</div>
	
		<div  ng-view style=" display:inline-block;">
	
		</div>
	</div>

</div>
</body>
<!---
	drone
	<video width="640" height="480" controls>
  <source src="peachfull.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>--->

	
</cfoutput>
	  
	</body>
	
	
	
	
	
	
	</meta>
	
</html>