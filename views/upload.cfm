<html >
	

<title>
	Green Chili
</title>
<div id='counter'></div>
<div ng-app="fileUpload" ng-controller="MyCtrl">
     Drop File:
    <div ngf-drop ngf-select ng-model="files" class="drop-box" 
        ngf-drag-over-class="'dragover'" ngf-multiple="true" ngf-allow-dir="true"
        accept=".xls" 
        ngf-pattern="'.xls'">Drop pdfs or images here or click to upload</div>
    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>
    Files:
    <ul>
        <li ng-repeat="f in files" style="font:smaller">{{f.name}} {{f.$error}} {{f.$errorParam}}</li>
    </ul>
    Upload Log:
    <pre>{{log}}</pre>
</div>
<cfscript>
	    					
			logic = createObject("component", "components/logic");
			
			userLogin = createObject("component", "proxy/userLogin");
		
		</cfscript>
		<cfoutput >
			
</cfoutput>
<ul>
	
 

	



		
	<style>
	.button {
    -moz-appearance: button;
    /* Firefox */
    -webkit-appearance: button;
    /* Safari and Chrome */
    padding: 10px;
    margin: 10px;
    width: 70px;
}
.drop-box {
    background: #F8F8F8;
    border: 5px dashed #DDD;
    width: 200px;
    height: 65px;
    text-align: center;
    padding-top: 25px;
    margin: 10px;
}
.dragover {
    border: 5px dashed blue;
}</style>
	</html>