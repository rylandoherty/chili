<body>
	
<div style=" display: inline-block; min-height = 400px; min-width: 800px;">
	
	<div style=" display: inline-block; background-color: gray">
		Show All
		<input type="checkbox" ng-model="data.allvideo" ng-init="data.allvideo=true">
		
	</div>

	<div style=" display: inline-block; background-color: gray">
		All Pilots
		<input type="checkbox" ng-model="data.allpilot"></input>
		<select ng-model= "data.selectpilot" >	
	  		
	  		<option ng-repeat="dem in data.pilotlist" value="{{dem.id}}">{{dem.name}}</option>
	  	</select>
  	</div>
  	
  	<div style=" display: inline-block; background-color: gray">
  		All Locations
  		<input type="checkbox" ng-model="data.alllocation">
	  	<select ng-model= "data.selectlocation" >	
	  		
	  		<option ng-repeat="dem in data.locationlist" value="{{dem.id}}">{{dem.name}}</option>
	  	</select>
  	</div>
  	
  	<div style=" display: inline-block; background-color: gray">
  		All Types
  		<input type="checkbox" ng-model="data.allviewgroup">
	  	<select ng-model= "data.selectviewgroup" >	
	  		
	  		<option ng-repeat="dem in data.viewgrouplist" value="{{dem.id}}">{{dem.Title}}</option>
	  	</select>
  	</div>
  	</div>

	<div ng-repeat = "file in data.uploadlist" ng-if="data.allvideo || (data.selectlocation == file.locationid.id && data.selectpilot == file.pilotid.id)">
		
<!---<img ng-if="file.uploadtypeid==1" style="width:200px; height: 200px;" src="upload/{{file.filename}}" ></img>--->
	


<div style=" background-color:gray; height: 600; width: 700; ">
<!--- <video ng-if="file.uploadtypeid.id==2" preload="auto" width="640" height="480" controls muted> --->
			<video ng-if="file.uploadtypeid.id==2" preload="auto" width="640" height="480" controls muted>
  <source ng-src="{{file.filename}}" type="video/mp4">

</video>
<div>
	Title {{file.filename.substring(7, file.filename.length-4)}} <br/>
	Pilot    {{file.pilotid.name}} <br/>
	Location    {{file.locationid.name}} <br/>
	Type    {{file.viewgroupid.Title}} <br/>
	Date    {{file.addedon | date: 'yyyy-MM-dd'}}
</div>
</div>
	</div>
</body>