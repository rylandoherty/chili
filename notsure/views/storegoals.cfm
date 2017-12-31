<html>
<button ng-click="changeMonth(-1)"><</button>
{{monthString}}
{{yearCode}}
<button ng-click="changeMonth(1)">></button>

<input type="checkbox" ng-model="monthView">

<br/>
<span ng-if="!monthView">
<button ng-click="changeWeek(-1)"><</button>
{{weekList[currentWeek].startofweekdate}}
{{weekList[currentWeek].endofweekdate}}
<button ng-click="changeWeek(1)">></button>

</span>
<span >

	Remaining<input type="radio" ng-model="viewType.set" value ="remaining">
	Achieved <input type="radio" ng-model="viewType.set" value="achieved">
	Goal <input type="radio" ng-model="viewType.set" value="goal">

</span>
<div style="float:left;">
<span ng-repeat="stores in goalcolumnchart[selectdate]" style="float:left;">
<table  width="600" style= "background-color : rgb(220,220,220)" >
	<caption>{{stores.storename}}</caption>

	<tr>
		<th width="200">Employee</th>
		<th width="100" ng-repeat="goallist in listofgoaltypes[selectdate]" >{{goallist}}</th>
	</tr>
	<tr ng-repeat="emps in result=(goalemployeecontainer| filter:{'month':monthString,'year':yearCode,'storename':stores.storename})"   >
		<td  ng-click="pageVariables.user=emps;pageVariables.store=stores;"  >{{emps.username}}</td>
		<!---<td><input align="center" style="width:100%; text-align:center;" ng-value="emps.percentageeffort" ng-model="emps.percentageeffort" ng-blur="updatepercentageeffort(emps.id,emps.percentageeffort)"></input></td>--->
		<td align="center" ng-if="monthView&&viewType.set=='goal'" ng-repeat="goallist in listofgoaltypes[selectdate]" >{{((goalcolumnchart[selectdate][stores.storename][goallist].value/100)*emps.percentageeffort)| number:0}}</td>
		<td align="center" ng-if="monthView&&viewType.set=='remaining'" ng-repeat="goallist in listofgoaltypes[selectdate]"
		
		
		style= " font-weight: bold; color: rgb(
			
		{{getRedColors(freshSalesContainer.total[stores.storename][emps.username][goallist], ((goalcolumnchart[selectdate][stores.storename][goallist].value/100)*emps.percentageeffort))}},
		{{getGreenColors(freshSalesContainer.total[stores.storename][emps.username][goallist], ((goalcolumnchart[selectdate][stores.storename][goallist].value/100)*emps.percentageeffort))}},
		0 ); 
		
		background-color:rgb(190,190,190); " 
		
		
		>{{((goalcolumnchart[selectdate][stores.storename][goallist].value/100)*emps.percentageeffort)-freshSalesContainer.total[stores.storename][emps.username][goallist]| number:0}}</td>
		<td align="center" ng-if="monthView&&viewType.set=='achieved'" ng-repeat="goallist in listofgoaltypes[selectdate]">{{freshSalesContainer.total[stores.storename][emps.username][goallist]| number:0}}</td>
		
		<span
		
		>
		
		<td align="center" ng-if="!monthView&&viewType.set=='goal'" ng-repeat="goallist in listofgoaltypes[selectdate]">
		{{(((goalcolumnchart[selectdate][stores.storename][goallist].value/100)*emps.percentageeffort)/endofmonth)*weekList[currentWeek].lengthofweek| number:0}}</td>
		
		<td align="center" ng-if="!monthView&&viewType.set=='remaining'" ng-repeat="goallist in listofgoaltypes[selectdate]"
		style= " font-weight: bold; color: rgb(
			
		{{getRedColors(freshSalesContainer[currentWeek][stores.storename][emps.username][goallist].thisweek, (((goalcolumnchart[selectdate][stores.storename][goallist].value/100)*emps.percentageeffort)/endofmonth)*weekList[currentWeek].lengthofweek )}},
		{{getGreenColors(freshSalesContainer[currentWeek][stores.storename][emps.username][goallist].thisweek, (((goalcolumnchart[selectdate][stores.storename][goallist].value/100)*emps.percentageeffort)/endofmonth)*weekList[currentWeek].lengthofweek)}},
		0 ); 
		
		background-color:rgb(190,190,190); " 
		>
		{{((((goalcolumnchart[selectdate][stores.storename][goallist].value/100)*emps.percentageeffort)/endofmonth)*weekList[currentWeek].endofweekdate)-freshSalesContainer.total[stores.storename][emps.username][goallist]| number:0}}</td>
		
		<td align="center" ng-if="!monthView&&viewType.set=='achieved'" ng-repeat="goallist in listofgoaltypes[selectdate]">
		{{freshSalesContainer[currentWeek][stores.storename][emps.username][goallist].thisweek| number:0}}</td>
		
		
		</span>
	
	</tr>

	</table>
	<br/>
	<br/>
</span>
</div>
{{pageVariables.user}}
<span style="float:left;">
	Debug <br>
	Goal List Value : {{goalcolumnchart[selectdate][pageVariables.store.storename][pageVariables.goal]}}
	lengthofweek : {{weekList[currentWeek].lengthofweek}}
	this week (fsc){{freshSalesContainer[currentWeek][pageVariables.store.storename][pageVariables.user.username][pageVariables.goal].accumulated}}
	EoM {{endofmonth}}
	Total {{freshSalesContainer.total[pageVariables.store.storename][pageVariables.user.username][pageVariables.goal]}}
</span>

</html>


