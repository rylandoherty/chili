
<style>
table, th, td {
    border: 1px solid black;
}
</style>

<!---Store<input type="radio" name="viewMode" value="store" ng-model="stuff.viewMode">
Employee<input type="radio" name="viewMode" value="employee" ng-model="stuff.viewMode">
<div ng-if="stuff.viewMode == 'store'">--->
<select ng-model="storemodel">

  				<option ng-repeat="stors in stores" value="{{stors.storeid}}" >{{stors.storeid}}</option>

			</select>
<!---</div>--->
<body >
			    <label for="startDate">Date :</label>
			    <input autocomplete="off" name="pickDate" id="pickDate" class="date-picked"  ng-model="stuff.xx" />
</body>{{stuff.xx}}
<button ng-click="reloadpage()">Reload</button>{{stuff.selecteddate}}
<span>Legend</span>
			
<img src="image/legend.png" alt="Legend">

<table >
	<tr>
		<th style="width:150px">Employee</th>
		<th style="width:150px" ng-repeat="day in weekdayArray">{{day}}</th>
	</tr>
	<tr ng-repeat="(key, value) in container[storemodel]">
		<td><div>{{key}}</div></td>
		
		
		<td ng-repeat="day in weekdayArray">
			<div class='schedule' ng-repeat="sched in value[day]['schedule'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.starttime}}--{{sched.endtime}}</span>
			</div>
			<div class='clock' ng-repeat="sched in value[day]['clocks'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.timein}}--{{sched.timeout}}</span>
			</div>
		</td>
		
		
	</tr>
</table>