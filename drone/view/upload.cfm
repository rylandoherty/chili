<html >


<title>

</title>
<!doctype html>
<html lang="en">
<head >
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  	<!---<input ng-model="username" placeholder="New user"></input>--->
  
</head>
<body>


</body>
</html>
<div ng-app="fileUpload" ng-controller="MyCtrl">
	<div>
  	{{data.selectpilot}}
  	{{data.viewselect}}
  	{{data.locationselect}}
  	<div style=" display: inline-block"> Pilot <select ng-model= "data.selectpilot" >	
  		
  		<option ng-repeat="dem in data.pilotlist" value="{{dem.id}}">{{dem.name}}</option>
  	</select>
  	
  	
  <div style=" display: inline-block">Group<select ng-model="data.viewselect">	
  		
  		<option ng-repeat="dem in data.viewlist" value="{{dem.id}}">{{dem.Title}}</option>
  	</select>
	</div>
	
	
	<div style=" display: inline-block">Location<select ng-model="data.locationselect">	
  		
  		<option ng-repeat="dem in data.locationlist" value="{{dem.id}}">{{dem.name}}</option>
  	</select>
  	<button ng-if="data.locationselect==0" ng-click="addLocation()">Add</button>
	</div>
	<div ng-if=" data.locationselect==0" style=" display: inline-block">
		 <input ng-model="data.locationname" placeholder="Location Name">
	</div>
	
  	
	</div>
  </div>
     Drop File:
    <div ngf-drop ngf-select ng-model="files" class="drop-box"
        ngf-drag-over-class="'dragover'" ngf-multiple="true" ngf-allow-dir="true"
        accept=".jpg,.png,.mp4,.avi,.AVI,.JPG"
        ngf-pattern="'.jpg,.png,.mp4,.avi,.AVI,.JPG'">Drop pdfs or images here or click to upload</div>
    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>
    Files:
    <ul>
        <li ng-repeat="f in files" style="font:smaller">{{f.name}} {{f.$error}} {{f.$errorParam}}</li>
    </ul>
    Upload Log:
    <pre>{{log}}</pre>
    
</div>









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