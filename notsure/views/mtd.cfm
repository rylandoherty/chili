<html>
<style>
	table {
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}


#door{
	float : right;
    
    
}


</style>
<div ng-hide="mtdz['viewtype'] != 'Employee'">
	

<input  type="checkbox" ng-model="HideX" ng-checked="HideX">HideX</input>
</div>
  <input type="radio" ng-init="mtdz['viewtype'] = 'Stores'" ng-model="mtdz['viewtype']" value="Stores"> Stores</input>
  <input type="radio"  ng-model="mtdz['viewtype']" value="Employee"> Employee</input><br>
  <input type="radio" ng-init="mtdz['datetype'] = 'MTD'" ng-change="setDate()" ng-model="mtdz['datetype']" value="LastMonth"> LastMonth</input>
  <input type="radio"ng-model="mtdz['datetype']" ng-change="setDate()"  value="MTD"> Month To Date</input>
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate()" value="lastweek"> Past 7 Days</input>
   <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate()" value="Yesterday"> Yesterday</input>
    <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate()" value="Today"> Today</input>{{mtdz['datetype']}}
    
    <br>
  	<input type="checkbox" ng-model="showTrending" ng-checked="showTrending">Trending <span ng-if="showTrending">{{trendRate|number : 1}}</span></input>

			
<span  ng-if="mtdz['viewtype'] == 'Stores'">
	
<table >
	 <col width="130">
  <col width="40">
  	 <col width="90">
  <col width="60">
  	 <col ng-repeat="formulas in groups" width="130" >

	<tr>
		<td >Name</td>
			<td >Hours</td>
			
			<td ng-repeat="formulas in groups">{{formulas.name}}</td>
		</tr>
	<tr >
		
			
  			<td>{{container[district]['name']}}</td>
			<td >{{container[district]['sales']['Hours']['QTY'] |number:2 }}</td>
			
			<td ng-repeat="formulas in groups">
			<span ng-if="showTrending && formulas.trending && mtdz['datetype']=='MTD'"> {{container[district]['sales']['formulagroup'][formulas.name]*trendRate| number:2}}</span>
			<span ng-if="!showTrending || !formulas.trending||mtdz['datetype']!='MTD'"> {{container[district]['sales']['formulagroup'][formulas.name]| number:2}}</span>
			
			
			</td>
			
  				
		
		
	</tr>
  		</table>	
	<br>
	<br>
<table >
	 <col width="130">
  <col width="40">
  	 <col width="90">
  <col width="60">
  	 <col ng-repeat="formulas in groups" width="130" >

	<tr>
		<td >Name</td>
			<td >Hours</td>
			
			<td ng-repeat="formulas in groups">{{formulas.name}}</td>
		</tr>
	<tr ng-repeat="focus in container[district]['stores'] " >
		
			
  			<td>{{focus.name}}</td>
			<td >{{focus['sales']['Hours']['QTY'] |number:2 }}</td>
			
			<td ng-repeat="formulas in groups">
			<span ng-if="showTrending && formulas.trending && mtdz['datetype']=='MTD'"> {{focus['sales']['formulagroup'][formulas.name]*trendRate| number:2}}</span>
			<span ng-if="!showTrending || !formulas.trending||mtdz['datetype']!='MTD'"> {{focus['sales']['formulagroup'][formulas.name]| number:2}}</span>
			
			
			</td>
			
  				
		
		
	</tr>
  		</table>
  		<br>
  		<br>
  		<br>
  		<span ng-repeat="focus in container[district]['stores']">
  			{{focus.name}}
  			<table >
  				<col width="130">
  <col width="40">
  	 <col width="90">
  <col width="60">
  	 <col ng-repeat="formulas in groups" width="130" >
  		<tr style="color:light-blue;">
			<td >Name</td>
			<td >Hours</td>
			
			<td ng-repeat="formulas in groups">{{formulas.name}}</td>
		</tr>
		<tr ng-repeat ="emps in focus['employees']">
			<td>{{emps.name}}</td>
			<td>{{usersHours[focus.name][emps.name].hoursworked|number:2}}</td>
			<td ng-repeat="formulas in groups">
				<span ng-if="showTrending && formulas.trending && mtdz['datetype']=='MTD'"> {{emps['sales']['formulagroup'][formulas.name]*trendRate| number:2}}</span>
				<span ng-if="!showTrending || !formulas.trending||mtdz['datetype']!='MTD'"> {{emps['sales']['formulagroup'][formulas.name]| number:2}}</span>
			</td>
		</tr>
  			</table>
  			<br>
  			<br>
  			<br>
  		</span>
  		</span>





<span ng-if="mtdz['viewtype'] == 'Employee'">
	<br>Sort Type: {{mtdz.sortType}}
	
	<table >
		<tr>
			<th>Employee</th>
			<th ng-repeat="currentView in mtdz['formulatoview']"  ng-click="mtdz.sortType = currentView['name']">{{currentView.name}}
			
			<span ng-if="!HideX">
				<button ng-click="removeFormula(currentView)">x</button>
			</span>
			</th>
			 
			<th><select ng-model="mtdz['formulaz']"   >
				
  				<option ng-repeat="beeps in groups" value="{{beeps.name}}" >{{beeps.name}}</option>
  
			</select><button ng-click="addFormulaToView(mtdz['formulaz'])">Add</button></th>
		</tr>
		<tr ng-repeat="emps in simpleContainer | orderBy: predicate:true">
			<td>{{emps['name']}}</td>
			<td  ng-repeat="currentView in mtdz['formulatoview']">
				<span ng-if="showTrending && currentView.trending && mtdz['datetype']=='MTD'"> {{emps[currentView['name']]*trendRate| number:2}}</span>
				<span ng-if="!showTrending || !currentView.trending||mtdz['datetype']!='MTD'"> {{emps[currentView['name']]| number:2}}</span>
				
				
			<td></td>
		</tr>
	</table>
	
</span>

</div>
</div>
</html>