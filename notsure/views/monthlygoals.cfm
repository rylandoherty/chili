<html>
	<button ng-click="hidenewgoal = !hidenewgoal">Add New Goal</button><br></br>

	<span ng-if="hidenewgoal">
<input ng-model="monthlygoalobject.district"></input>
<input ng-model="monthlygoalobject.year" placeholder="year"></input>
<input ng-model="monthlygoalobject.month" placeholder="month"></input>
<form>

	<select ng-model="monthlygoalobject.storename">

		<option ng-repeat="stors in storelist" value="{{stors.storeid}}" >{{stors.storeid}}</option>

	</select>
	<select ng-model="monthlygoalobject.formulaname">

		<option ng-repeat="forms in formulalist" value="{{forms.name}}" >{{forms.name}}</option>

	</select>
	<input ng-model="monthlygoalobject.value" placeholder="value"></input>
<button ng-click="newm()">
</button>
</form>
</span>
<select ng-model="selectdate">

		<option ng-repeat="(key,value) in goalcolumnchart" value="{{key}}" >{{key}}</option>

	</select>


<table ng-repeat="(key,value) in goalcolumnchart" ng-if="key==selectdate">
	<caption>{{key}}</caption>

	<tr>
		<th>Stores</th>
		<th ng-repeat="goallist in listofgoaltypes[key]" >{{goallist}}</th>
	</tr>
	<tr ng-repeat="stores in value">
		<td ng-click="selectTarget(stores.storename,key)">{{stores.storename}}</td>
		<td ng-repeat="goallist in listofgoaltypes[key]">{{stores[goallist].value}}<button ng-click="deletegoal(stores[goallist].id)">X</button></td>
	</tr>

</table>
<br></br>
<br></br>
<br></br>
{{storething}}   {{datething}}
<span ng-if="storething">
	<br></br>
<button ng-click="addUserToGoal()">Add User</button>
<input ng-model="searchuserstring" ng-change="addLetter(searchuserstring)"></input>
<select ng-model="relationobject.selectedusertoadd">

		<option ng-repeat="peeps in userfilter" value="{{peeps}}" >{{peeps}}</option>

	</select>
	<select ng-model="relationobject.position">

		<option value="Manager" >Manager</option>
  		<option value="Sales" >Sales</option>
	</select>

	{{relationobject.position}}
	<table width="600" >
	<caption>Sales Reps</caption>

	<tr>
		<th width="200">Employee</th>
		<th width="50">%%</th>
		<th width="100" ng-repeat="goallist in listofgoaltypes[selectdate]" >{{goallist}}</th>
	</tr>
	<tr ng-repeat="emps in result=(goalemployeecontainer | filter:{'month':monthlygoalobject.month,'year':monthlygoalobject.year,'storename':storething})" >
		<td>{{emps.username}}</td>
		<td><input align="center" style="width:100%; text-align:center;" ng-value="emps.percentageeffort" ng-model="emps.percentageeffort" ng-blur="updatepercentageeffort(emps.id,emps.percentageeffort)"></input></td>
		<td align="center" ng-repeat="goallist in listofgoaltypes[selectdate]">{{(goalcolumnchart[selectdate][storething][goallist].value/100)*emps.percentageeffort| number:0}}</td>
	</tr>

	</table>
	Sum: {{addSums(result)}}
	</span>


<!---add new position user-relation

manager details-default-goalrepeat

employee details-work%--->
</html>