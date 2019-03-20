<style>

table {
 
		  border: 1px solid #000;
		}

th, td {
 
  text-align: left; 
  vertical-align: top; 
  border: 1px solid #000;
  font-size:1.5em;
}

.ui-datepicker-calendar {
        display: none;
        }
</style>
<body >
		<div style=" display: inline-block; float: left">
			<body >
			    <label for="startDate">Date :</label>
			    <input autocomplete="off"  name="startDate" id="startDate" class="date-picker" /><br/>
			    <button ng-click="updateDateValue()">loadDate</button><br/>
			    Selected {{Stuff.selectedDate}}
			</body><br/>
			
			<select ng-if="thisGuy.accesslevel < 2" ng-model="Stuff.addingEmployee" ng-change="changePerson()" ng-options="e.USER as e.USER.name for e in commemps" >
				<!---<option ng-repeat= "users in commemps" value="{{users.USER.userid}}" >{{users.USER.name}}</option>--->
				<!---<option ng-repeat= "users in Stuff.userlist" ng-if="users.accesslevel < 4 && users.accesslevel > 0 && users.COMZ.length !=0" value="{{users.userid}}" >{{users.COMZ.length}}</option>--->
			</select>
			
			Selected Group : {{Stuff.selectedGroup.name}}
			
			
			<table>
				<tr>
					<th>Group</th>
					<th>Base</th>
					<th>Earned</th>
					<th>Total</th>
					<th>Draw</th>
				</tr>
				<tr ng-repeat="groups in CommEmp.COMMGROUPS" ng-click="Stuff.selectedGroup = groups; createDonuts();" >
				<td>{{groups.name}}</td>
				<td>{{groups.basepaypercent*100 | number: 2}}%</td>
				<td>{{groups.earned*100 | number: 2}}%</td>
				<td>{{groups.pay|number:2}}</td>
				</tr>
				<tr>
					<td>TOTAL</td>
					<td></td>
					<td></td>
					<td>{{addSums(CommEmp)|number:2}}</td>
				</tr>
			</ul>
			
		</div>
	
		<div id="donutcontainer" style=" display: inline-block; min-width:70vw; min-height: 350px; ">
			
			
			
		</div>
		
		
		
		
		
</body>