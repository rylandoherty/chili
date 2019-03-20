{{EmployeeSelect.userid}} 
<div ng-if="thisGuy.accesslevel<3&&monthSelection=='LastMonth'" >
<select ng-model="EmployeeSelect.userid" ng-change="changePerson()"   >
				
  				<option ng-repeat="stors in container2['userstore']" value="{{stors.name}}" >{{stors.name}}</option>
  
			</select>
<br>
</div>
<div ng-if="thisGuy.accesslevel<3&&monthSelection=='ThisMonth'"   >
<select ng-model="EmployeeSelect.userid" ng-change="changePerson()"  >
				
  				<option ng-repeat="stors in container['userstore']" value="{{stors.name}}" >{{stors.name}}</option>
  
			</select>
<br>
</div>

<button ng-click="changeMonth(-1)"><</button>
	{{monthString}}
	{{year}}
	<button ng-click="changeMonth(1)">></button><br><br>
<span ng-if="monthSelection=='ThisMonth'">

DRAW : 	{{addDraw(EmployeeSelect.userid)}}<br>
PAY :  {{EmployeeSelect.sum | number :2}}
</span>

	
<span ng-if="monthSelection=='LastMonth'">
DRAW : 	{{addDraw(EmployeeSelect.userid)}}<br>
PAY :  {{EmployeeSelect.sum2 | number :2}}
</span>

<style>
table, th, td {
    border: 1px solid black;
}
</style>

<span ng-if="monthSelection=='ThisMonth'">
<table style="border: 1px solid black;" ng-repeat="store in container['userstore'][EmployeeSelect.userid]['stores']">
	
	<caption>{{store}}</caption>
	<tr>	
		<th>Goal</th>
		<th>Achieved</th>
		<th>Cash Per</th>
		<th>Cash</th>
	</tr>
	<tr ng-repeat="goals in goalstorelist" ng-if="goals['stores']['storeid']==store">	
		<th>{{goals.name}}</th>
		<th>{{container[district]['stores'][store]['employees'][EmployeeSelect.userid]['sales']['formulagroup'][goals.formulalist.name]|number:2}}</th>
		<th>${{goals.PercentPay|number:3}}</th>
		<th>${{goals.EmployeePay|number:2}}</th>
	</tr>
	
	</table>
	
	<br>
	<br>
	
	
</span>

<span ng-if="monthSelection=='LastMonth'">
<table style="border: 1px solid black;" ng-repeat="store in container2['userstore'][EmployeeSelect.userid]['stores']">
	
	<caption>{{store}}</caption>
	<tr>	
		<th>Goal</th>
		<th>Achieved</th>
		<th>Cash Per</th>
		<th>Cash</th>
	</tr>
	<tr ng-repeat="goals in goalstorelist2" ng-if="goals['stores']['storeid']==store">	
		<th>{{goals.name}}</th>
		<th>{{container2[district]['stores'][store]['employees'][thisGuy.userid]['sales']['formulagroup'][goals.formulalist.name]|number:2}}</th>
		<th>${{goals.PercentPay|number:3}}</th>
		<th>${{goals.EmployeePay|number:2}}</th>
	</tr>
	
	</table>
	
	<br>
	<br>
	
	
</span>

<span ng-show="monthSelection=='ThisMonth'">	
<select ng-model="storeSelect"   >
				
  				<option ng-repeat="stors in container['userstore'][EmployeeSelect.userid]['stores']" value="{{stors}}" >{{stors}}</option>
  
			</select>
			
</span>	
<span ng-show="monthSelection=='LastMonth'">	
<select ng-model="storeSelect2"   >
				
  				<option ng-repeat="stors in container2['userstore'][EmployeeSelect.userid]['stores']" value="{{stors}}" >{{stors}}</option>
  
			</select>
</span>	
			
			
			
			
<span ng-if="monthSelection=='ThisMonth'">		
			{{storeSelect}}

<div  style="border: 1px solid black;"  ng-repeat="store in container['userstore'][EmployeeSelect.userid]['stores']" ng-if="storeSelect == store">
	{{store}}
	<div  style="border: 1px solid black;" ng-repeat = "goals in goalstorelist" ng-if="goals['stores']['storeid']==store" >
		
	{{goals.name}}
<table  >
	<tr>
		<th>Pay Per</th>
		<th>Goal</th>
	</tr>
	<tr ng-repeat = "thing in goals['format']">
		<td>{{(goals.cash*thing.percentpayed/100)/(goals.quantity*thing.progress/100)| number :3}}</td>
		
		<td>{{goals.quantity*thing.progress/100| number :2}}</td>
	</tr>
	</table>
	Store : {{container[district]['stores'][store]['sales']['formulagroup'][goals.formulalist.name]|number:0}}<br>
	Pay Per {{goals.PercentPay|number:3}} <br>
	
	{{EmployeeSelect.userid}}  {{goals.EmployeePay|number:2}}<br>
	{{goals.formulalist.name}} : {{container[district]['stores'][store]['employees'][EmployeeSelect.userid]['sales']['formulagroup'][goals.formulalist.name]|number:2}}
	
	<br>
	<br>
	</div>
	


</div>
</span>



<span ng-if="monthSelection=='LastMonth'">		
			

<div style="border: 1px solid black;" ng-repeat="store in container2['userstore'][thisGuy.userid]['stores']" ng-if="storeSelect2 == store">
	{{store}}
	<div  style="border: 1px solid black;"  ng-repeat= "goals in goalstorelist2" ng-if="goals['stores']['storeid']==store" >
		
	{{goals.name}}
<table  >
	<tr>
		<th>Pay Per</th>
		<th>Goal</th>
	</tr>
	<tr ng-repeat = "thing in goals['format']">
		<td>{{(goals.cash*thing.percentpayed/100)/(goals.quantity*thing.progress/100)| number :3}}</td>
		
		<td>{{goals.quantity*thing.progress/100}}</td>
	</tr>
	</table>
	Store : {{container2[district]['stores'][store]['sales']['formulagroup'][goals.formulalist.name]|number:0}}<br>
	Pay Per {{goals.PercentPay|number:3}} <br>
	
	{{thisGuy.userid}}  {{goals.EmployeePay|number:2}}<br>
	{{goals.formulalist.name}} : {{container2[district]['stores'][store]['employees'][thisGuy.userid]['sales']['formulagroup'][goals.formulalist.name]|number:2}}
	
	<br>
	<br>
	</div>
	


</div>
</span>





