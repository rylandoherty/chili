
<style>
table, th, td {
    border: 1px solid black;
}
</style>
<select ng-model="storemodel"   >

  				<option ng-repeat="stors in stores" value="{{stors.storeid}}" >{{stors.storeid}}</option>

			</select>
<span>Legend</span>
<img src="image/legend.png" alt="Legend">

<table >
	<tr>
		<th style="width:150px">Employee</th>
		<th style="width:150px">Sunday</th>
		<th style="width:150px">Monday</th>
		<th style="width:150px">Tuesday</th>
		<th style="width:150px">Wednesday</th>
		<th style="width:150px">Thursday</th>
		<th style="width:150px">Friday</th>
		<th style="width:150px">Saturday</th>
	</tr>
	<tr ng-repeat="(key, value) in container[storemodel]">
		<td><div>{{key}}</div></td>

		<td>
			<div class='schedule' ng-repeat="sched in value['Sunday']['schedule'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.starttime}}--{{sched.endtime}}</span>
			</div>
			<div class='clock' ng-repeat="sched in value['Sunday']['clocks'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.timein}}--{{sched.timeout}}</span>
			</div>
		</td>


		<td><div class='schedule' ng-repeat="sched in value['Monday']['schedule'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.starttime}}--{{sched.endtime}}</span>
				</div>
				<div class='clock' ng-repeat="sched in value['Monday']['clocks'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.timein}}--{{sched.timeout}}</span>
			</div>
		</td>
		<td><div class='schedule' ng-repeat="sched in value['Tuesday']['schedule'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.starttime}}--{{sched.endtime}}</span>
				</div>
				<div class='clock' ng-repeat="sched in value['Tuesday']['clocks'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.timein}}--{{sched.timeout}}</span>
			</div>
		</td>
		<td><div class='schedule' ng-repeat="sched in value['Wednesday']['schedule'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.starttime}}--{{sched.endtime}}</span>
				</div>
				<div class='clock' ng-repeat="sched in value['Wednesday']['clocks'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.timein}}--{{sched.timeout}}</span>
			</div>
		</td>
		<td><div class='schedule' ng-repeat="sched in value['Thursday']['schedule'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.starttime}}--{{sched.endtime}}</span>
				</div>
				<div class='clock' ng-repeat="sched in value['Thursday']['clocks'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.timein}}--{{sched.timeout}}</span>
			</div>
		</td>
		<td><div class='schedule' ng-repeat="sched in value['Friday']['schedule'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.starttime}}--{{sched.endtime}}</span>
				</div>
				<div class='clock' ng-repeat="sched in value['Friday']['clocks'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.timein}}--{{sched.timeout}}</span>
			</div>
		</td>
		<td><div class='schedule' ng-repeat="sched in value['Saturday']['schedule'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
			<span class="tooltiptext">{{sched.starttime}}--{{sched.endtime}}</span>
			</div>
			<div class='clock' ng-repeat="sched in value['Saturday']['clocks'] " style="position: relative;left:{{sched.left}}px;width:{{sched.width}}px">
				<span class="tooltiptext">{{sched.timein}}--{{sched.timeout}}</span>
			</div>
		</td>
	</tr>
</table>