<html>
	<style >
		
	
		table {
    border-collapse: collapse;
}

td {
    border: 1px solid black;
    width:10vw;
     text-align: center;
}
table{
	width:60vw;
	height:15vh;
	border: 1px solid black;
}
th{
	width:10vw;
	border: 1px solid black;
}
</style>
	<button ng-show="thisGuy.name == 'Rylan Doherty'|| thisGuy.name == 'Wiguen Thimotee'" ng-click="hidenewgoal = !hidenewgoal">Add New Goal</button><br></br>

	<span ng-if="hidenewgoal">
<!---<input ng-model="monthlygoalobject.district"></input>--->
<input ng-model="monthlygoalobject.year" placeholder="year"></input>
<input ng-model="monthlygoalobject.month" placeholder="month"></input>
<br/>
<form>

<body>
<div>{{thisGuy}}</div>
</body>
	<select ng-model="monthlygoalobject.storename">

		<option ng-repeat="stors in storelist" value="{{stors.storeid}}" >{{stors.storeid}}</option>

	</select>
	<select ng-model="monthlygoalobject.formulaname">

		<option ng-repeat="forms in formulalist" value="{{forms.name}}" >{{forms.name}}</option>

	</select>
	<!---<input ng-model="monthlygoalobject.beatbest" placeholder="beatbest"></input>--->
	<input ng-model="monthlygoalobject.average" placeholder="average"></input>
	<input ng-model="monthlygoalobject.lastyear" placeholder="lastyear"></input>
<button ng-click="newm()"> Add
</button>
</form>
</span>
<select ng-model="selectdate" ng-selected="selectdate" ng-change="dateChanges()">

		<option ng-repeat="(key,value) in goalcolumnchart" value="{{key}}" >{{key}}</option>

	</select>
	<select ng-model="selectstorename">

		<option ng-repeat="stors in storelist" value="{{stors.storeid}}" >{{stors.storeid}}</option>

	</select>
	<table style="" ng-repeat= "emps in empbystorewithstats" ng-show="emps.username==thisGuy.name" >
			<caption>
				{{emps.username}}
			</caption>
			<tr>
		<th>Category</th>
		
		
		<th>Forcast</th>
		<th>Current</th>
		<th>Progress</th>
			</tr>
			
	
			
			<tr ng-repeat="goallist in listofgoaltypes[selectdate]">
			<td> {{goallist}}</td>
		
		<td>
			
			
			
			
			<div ng-if="emps[goallist].finalized">{{emps[goallist].forcast|number:2}}</div>
			
		</td>
		
		
		<td><div>{{emps['stats'][goallist] | number:2}}</div></td>
		
		</tr>
		<tr>
			<td>Hum</td>
			<td>{{emps['SMB'].forcast|number:2}}</td>
		</tr>
		
		
		<tr></tr>
		<tr></tr>
		<tr></tr>
				</table>
	
<table>
	<caption >{{selectstorename}}</caption>

	<tr>
		<th>Category</th>
		<!---<th>Best</th>--->
		<th>Average (1YR)</th>
		<th>Exactly <br/>LastYear</th>
		<th>Forcast</th>
		<th>Current</th>
		<th>Remaining-Trending</th>
	</tr>
	
	<tr ng-repeat="goallist in listofgoaltypes[selectdate]" ng-style=" {'background-color': colorFormula[goallist] }">
		
		<td> {{goallist}}</td>
		<!---<td> {{goalcolumnchart[selectdate][selectstorename][goallist].beatbest | number: 2}}</td>--->
		<td> {{goalcolumnchart[selectdate][selectstorename][goallist].average | number: 2}}</td>
		<td> {{goalcolumnchart[selectdate][selectstorename][goallist].lastyear | number : 2}}</td>
		
		<td>
			<div ng-if="hidenewgoal"> 
				<input  ng-model="goalcolumnchart[selectdate][selectstorename][goallist].forcast" placeholder="Forcast" ng-blur="setForcastForStore(goalcolumnchart[selectdate][selectstorename][goallist])">
				<br/> Final <input type="checkbox" ng-model="goalcolumnchart[selectdate][selectstorename][goallist].finalized" ng-checked="goalcolumnchart[selectdate][selectstorename][goallist].finalized" ng-change="setFinalizeForStore(goalcolumnchart[selectdate][selectstorename][goallist])" > 
			</div>
			
			<div ng-if="!hidenewgoal">
			<div ng-if="! goalcolumnchart[selectdate][selectstorename][goallist].finalized"> 
				<input ng-model=" goalcolumnchart[selectdate][selectstorename][goallist].forcast" placeholder="Forcast" ng-blur="setForcastForStore(goalcolumnchart[selectdate][selectstorename][goallist])" > 
				<br/> Final <input ng-if="thisGuy.accesslevel < 2" type="checkbox" ng-model=" goalcolumnchart[selectdate][selectstorename][goallist].finalized" ng-change="setFinalizeForStore(goalcolumnchart[selectdate][selectstorename][goallist])" > 
			</div> 
			<div ng-if=" goalcolumnchart[selectdate][selectstorename][goallist].finalized">{{ goalcolumnchart[selectdate][selectstorename][goallist].forcast |number:2}}</div>
			</div>
		</td>
		
		
		
		
		
		
		
		
		
		<td>{{  rightcontainer['MTD']['locations'][selectstorename][goallist]|number: 2}}</td>
		<td>{{((rightcontainer['MTD']['locations'][selectstorename][goallist] * trend)- goalcolumnchart[selectdate][selectstorename][goallist].lastyear )  | number: 2}}</td>
		<td ng-show="hidenewgoal"><button ng-click="deleteStoreGoal()" >Delete</button></td>
	</tr>

</table>


<br></br>
<br></br>
<br></br>


<span  >
	<br/>
	<div ng-show="thisGuy.name == 'Rylan Doherty' && selectstorename">
<button ng-click="addUserToGoal()">Add to {{selectstorename}}</button>
<!---<input ng-model="searchuserstring" ng-change="addLetter(searchuserstring)"></input>--->
<select ng-model="relationobject.selectedusertoadd">

		<option ng-repeat="peeps in userfilter" value="{{peeps}}" >{{peeps}}</option>

	</select>
	</div
	<!---<select ng-model="relationobject.position">

		<option value="Manager" >Manager</option>
  		<option value="Sales" >Sales</option>
  		{{relationobject.position}}
	</select>--->

<br/><br/>

	<table style="" ng-repeat= "emps in empbystorewithstats" ng-show="emps.storename==selectstorename" >
			<caption>
				{{emps.username}}
			</caption>
			<tr>
		<th>Category</th>
		<!---<th>Best</th>--->
		<th>Average (1YR)</th>
		
		<th>Forcast</th>
		<th>Current</th>
			</tr>
			
	
			
			<tr ng-repeat="goallist in listofgoaltypes[selectdate]">
			<td> {{goallist}}</td>
		<!---<td><input ng-if="hidenewgoal" ng-model="emps[goallist].beatbest " placeholder="Beatbest" ng-blur="updateEmp(emps.username ,goallist)"></input><div ng-if="!hidenewgoal">{{emps[goallist].beatbest|number:2}}</div></td>--->
		<td><input ng-if="hidenewgoal" ng-model="emps[goallist].average" placeholder="Average" ng-blur="updateEmp(emps.username ,goallist)"></input><div ng-if="!hidenewgoal">{{emps[goallist].average|number:2}}</div></td>
		
		<td>
			<div ng-if="hidenewgoal"> 
				<input  ng-model="emps[goallist].forcast" placeholder="Forcast" ng-blur="updateEmp(emps.username ,goallist)">
				<br/> Final <input ng-if="thisGuy.accesslevel < 2" type="checkbox" ng-model="emps[goallist].finalized"  ng-change="updateEmp(emps.username ,goallist)" > 
			</div>
			
			<div ng-if="!hidenewgoal">
			<div ng-if="!emps[goallist].finalized"> 
				<input ng-model="emps[goallist].forcast" placeholder="Forcast" ng-blur="updateEmp(emps.username , goallist)" > 
				<br/> Final <input type="checkbox" ng-model="emps[goallist].finalized"  ng-change="updateEmp(emps.username , goallist)" > 
			</div> 
			<div ng-if="emps[goallist].finalized">{{emps[goallist].forcast|number:2}}</div>
			</div>
		</td>
		
		 
		<td><div>{{rightcontainer['MTD']['employeesbyname'][emps.username][goallist] | number:2}}</div></td>
		
		</tr>
		<tr></tr>
		<tr></tr>
		<tr></tr>
				</table>
	
	


<!---add new position user-relation

manager details-default-goalrepeat

employee details-work%--->
</html>