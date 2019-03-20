<button ng-click="changeMonth(-1)"><</button>
{{monthString}}
{{year}}
<button ng-click="changeMonth(1)">></button>
<button ng-if="thisGuy.accesslevel<3" ng-click="settings.show = !settings.show">Settings</button>

<span>
	<table>
		<tr>
			<th>User Name</th>
			<th ng-if="settings.show">
				Hide
			</th>
			<th ng-if="!settings.show" ng-repeat="(key,value) in drawlist.BYUSER">
			<div class='clockreport' style=" position: relative;" >
			{{key}}
			<span class="tooltiptext" >
				
				
				pay:{{value['TOTAL']['PAY']| number:2}} <br>
			draw:{{value['TOTAL']['DRAW']| number:2}}<br>
			HOURSFORDRAW:{{value['TOTAL']['HOURSFORDRAW']| number:2}}<br>
			HOURS:{{value['TOTAL']['HOURS']| number:2}}<br>
			HOLIDAY:{{value['TOTAL']['HOLIDAY']| number:2}}<br>
			</span>
			</div>
			
			</th>
			<th>Total</th>
			<th>Draw</th>
			<th ng-if="settings.show" >Wage</th>
		</tr>
		<tr>
			<td>Totals</td>
			
			<td  ng-if="!settings.show" ng-repeat="weeks in drawlist.BYUSER">
			
				{{weeks['TOTAL']['HOURS']| number:2}}<br>
			
			
			</td>
			
		</tr>
		<tr ng-repeat="users in userlist" ng-if="thisGuy.accesslevel <2 || users.userid==thisGuy.userid">
			<td>{{users.userid}}</td>
			<td ng-if="settings.show">
				<button ng-click="removeUser(users.userid)">x</button>
			</td>
			<td ng-if="settings.show">
				<input ng-value="users.wage" ng-model="users.wage" ng-blur="setWage(users.userid,users.wage)"></input>
			</td>
			
			<td  ng-if="!settings.show" ng-repeat="weeks in drawlist.BYUSER">
			<div class='clockreport' style="position: relative;">{{weeks['user'][users.userid]['HOURS']-weeks['user'][users.userid]['HOURSNOTFORDRAW']| number:2}}
			<span class="tooltiptext" >
			<table style=" color:white; border-color:white; border-style:solid;">  
				<tr>
					<th>Date</th>
					<th>Hours</th>
					
				</tr>
				<tr ng-repeat="clocks in weeks['user'][users.userid]['clocks']">
					<td>{{clocks.date}}</td>
					<td>{{clocks.hours}}</td>
					
					
				</tr>
			</table><br>
			<p ng-if="thisGuy.accesslevel<3 || users.userid==thisGuy.userid" style=" color:white; border-style:solid; border-color:white;">
			pay:{{weeks['user'][users.userid]['pay']| number:2}}<br>
			draw:{{weeks['user'][users.userid]['draw']| number:2}}<br>
			HOURSinDRAW:{{weeks['user'][users.userid]['HOURSFORDRAW']| number:2}}<br>
			HOURS:{{weeks['user'][users.userid]['HOURS']| number:2}}<br>
			HOLIDAY:{{weeks['user'][users.userid]['HOLIDAY']| number:2}}<br>
			</p>
			</span>
			</div>
			</td>
			<td>{{addSums([users.userid])}}</td>
			<td ng-if="thisGuy.accesslevel<3 || users.userid==thisGuy.userid" > {{addDraw([users.userid])}}</td>
			
			
			
		</tr>
		<tr ng-if="settings.show">
			<td><select ng-model="settings.addPerson">

		<option ng-repeat="peeps in fulluserlist" value="{{peeps.userid}}" >{{peeps.userid}}</option>

	</select></td><td><button ng-click="setDistrictForUser()"></td>
		</tr>
	</table>
	
	<span ng-if="userGuy.accesslevel >2"></span>
	
</span> 
				