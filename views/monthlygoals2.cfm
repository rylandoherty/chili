<html>
	<style >
		




#q-graph {
  display: block; 
  position: relative; 
  width: 200px; 
  height: 300px;
  margin: 1.1em 0 0; 
  padding: 0;
  background: transparent;
  font-size: 11px;
}

#q-graph caption {
  caption-side: top; 
  width: 600px;
  text-transform: uppercase;
  letter-spacing: .5px;
  top: -40px;
  position: relative; 
  z-index: 10;
  font-weight: bold;
}

#q-graph tr, #q-graph th, #q-graph td { 
  position: absolute;
  bottom: 0; 
  width: 150px; 
  z-index: 2;
  margin: 0; 
  padding: 0;
  text-align: center;
}

#q-graph td {
  transition: all .3s ease;
  
  
}
#q-graph td:hover {
 transition: all .3s ease;
    background-color: desaturate(#85144b, 100);
    opacity: .9;
    color: white;
  
}
  
#q-graph thead tr {
  left: 100%; 
  top: 50%; 
  bottom: auto;
  margin: -2.5em 0 0 5em;}
#q-graph thead th {
  width: 7.5em; 
  height: auto; 
  padding: 0.5em 1em;
}
#q-graph thead th.sent {
  top: 0em; 
  left: 0; 
  line-height: 0;
}
#q-graph thead th.current {
  top: 2em; 
  line-height: 0;
  left: 0; 
}
#q-graph thead th.trend {
  top: 4em; 
  line-height: 0;
  left: 0; 
}
#q-graph thead th.operation {
  top: 6em; 
  line-height: 0;
  left: 0; 
}
#q-graph tbody tr {
  height: 296px;
  padding-top: 2px;
  border-right: 1px dotted #C4C4C4; 
  color: #AAA;
}
#q-graph #q1 {
  left: 0;
}
#q-graph #q2 {left: 150px;}
#q-graph #q3 {left: 300px;}
#q-graph #q4 {left: 450px; border-right: none;}
#q-graph tbody th {bottom: -1.75em; vertical-align: top;
font-weight: normal; color: #333;}
#q-graph .bar {
  width: 45px; 
  border: 1px solid; 
  border-bottom: none; 
  color: #000;
}
#q-graph .bar p {
  margin: 5px 0 0; 
  padding: 0;
  opacity: 1;
}
#q-graph .sent {
  left: 13px; 
  background-color: #1d51c1;
  border-color: transparent;
}
#q-graph .current {
  left: 59px; 
  background-color: #cc1e1e;
  border-color: transparent;
}
#q-graph .trend {
  left: 105px; 
  background-color: #1b7737;
  border-color: transparent;
}
#q-graph .operation {
  left: 30px; 
  background-color: #ef7109;
  border-color: transparent;
}
#ticks {
  position: relative; 
  top: -267px; 
  left: 2px;
  width: 596px; 
  height: 20px; 
  z-index: 1;
  margin-bottom: -400px;
  font-size: 10px;
  font-family: "fira-sans-2", Verdana, sans-serif;
}

#ticks .tick {
  position: relative; 
   
  width: 600px;
}

#ticks .tick p {
  position: absolute; 
  left: -5em; 
  top: -0.8em; 
  margin: 0 0 0 0.5em;
}
</style>


			<body>
				<div style = " display: inline-block; border-style: solid">
				<div>{{thisGuy.name}}</div>
				
				
				<select ng-model="selectdate" ng-selected="selectdate" ng-change="dateChanges()">
					<option ng-repeat="(key,value) in goalcolumnchart" value="{{key}}" >{{key}}</option>
				</select>
				
				<select ng-if="thisGuy.accesslevel < 2" ng-model ="selectedEmployee.name" ng-change="updateGuy()" >
					<option ng-repeat = "users in employeeListDD" ng-value ="users.name"> {{users.name}}</option>
				 </select>
				 <br>
				<div >Commission Earned: {{ rightcontainer['MTD'].employeesbyname[selectedEmployee.name].forms['GrossProfit'].value * (selectedEmployee['data'].basepercent + bonusRate)/100|number : 2 }}  <br>
				 Rate Earned: {{selectedEmployee['data'].basepercent + bonusRate|number : 2}}% </div> 
			<br>
				 <!---<div ng-if="isthismonth">Trending Commission: {{ (rightcontainer['MTD'].employeesbyname[selectedEmployee.name].forms['GrossProfit'].value*trend) * (selectedEmployee['data'].basepercent + bonusRateTrend)/100|number : 2 }}  <br> 
				 	Trending Rate: {{selectedEmployee['data'].basepercent + bonusRateTrend|number : 2}}% </div> --->
				 	<div ng-if="isthismonth">Trending Commission: {{ (rightcontainer['MTD'].employeesbyname[selectedEmployee.name].forms['GrossProfit'].value*trend) * 27/100|number : 2 }}  <br> 
				 	@ 27% </div>
				 	
				 	<div><br>
				 	Draw {{addDraw([selectedEmployee.name])|number : 2}} </div>
	
</div>
<div style = " display: inline-block; border-style: solid">
	<!---Hum:<br>--->
	Trend: {{date2}}/{{date1-hourfraction}} = {{trend}} 
	
	
</div>
<div style = " display: inline-block"><table id="q-graph" style=" display: inline-block; width:100px; height:100px; ">

<thead>
<tr>
<th class="sent">Forecast</th>
<th class="current">Current</th>
<th class="trend">Trending</th>
<th class="operation">Operation</th>
</tr>
</thead>

</table></div>
			<div style=" padding-left:5vw; min-width:1200px; height:800px; border-style: solid;">
				
				<div ng-repeat="goallist in listofgoaltypes[selectdate]" style=" display: inline-block; border-style: solid ">
				<table id="q-graph" style=" display: inline-block; " >

<thead>

</thead>
<tbody>
<tr class="qtr" id="q1">
<th scope="row" style=""><div>
	
	</div>
</th>


<td class="sent bar" style="height: 200px;">
	<p style=" color: white; font-weight: bolder ">{{empbystorewithstats[selectedEmployee.name][goallist]['forcast']}}</p></td>


<td class="current bar" ng-style=" {'height': ((rightcontainer['MTD'].employeesbyname[selectedEmployee.name].forms[goallist].value/empbystorewithstats[selectedEmployee.name][goallist]['forcast'])*200)+'px'}">
	<p style=" color: white; font-weight: bolder ">{{rightcontainer['MTD'].employeesbyname[selectedEmployee.name].forms[goallist].value| number : goallist.decimal}}<br>
		 {{graphData[goallist].progress*100 |number:1 }}%  
	</p></td>


<td class="trend bar" ng-if="groupsbyname[goallist].trending&&isthismonth" ng-style=" {'height': (((rightcontainer['MTD'].employeesbyname[selectedEmployee.name].forms[goallist].value*trend)/empbystorewithstats[selectedEmployee.name][goallist]['forcast']).toFixed(2))*200+'px'} ">
	
	<p style=" color: white; font-weight: bolder ">{{rightcontainer['MTD'].employeesbyname[selectedEmployee.name].forms[goallist].value*trend |number : 2}}<br>
		{{graphData[goallist].progresstrend*100 |number:1 }}%
	</p> </td>

</tr>

</tbody>


</table>
<div> 
	{{goallist}}<br>
 {{graphData[goallist].ratecurrent|number:1}}% out of a total  {{graphData[goallist].rate}}% 

<!---<span ng-if="groupsbyname[goallist].trending&&isthismonth"> Trend   : {{graphData[goallist].ratetrend|number:2}}/{{graphData[goallist].rate}}  </span><br> 

Progress	 {{graphData[goallist].progress*100 |number:3 }}%  
	 <br>
	 <span ng-if="groupsbyname[goallist].trending&&isthismonth"> Trend Progress	 {{graphData[goallist].progresstrend*100 |number:4 }}%</span><br>
	 </div>--->
</div>

</div>


<div style=" display: inline-block; border-style: solid">
<table id="q-graph" style=" width:100px; display: inline-block; border-style: solid" >

<thead>

</thead>
<tbody>
<tr class="qtr" id="q1">
<th scope="row" style="">
	
	
</th>


<td class="operation bar"  ng-style=" {'height': opBonuspx}"><p style=" color: white; font-weight: bolder ">{{oppBonusRate| number:3}}%</p></td> 




</tr>

</tbody>


</table>
<div> 
	Operation<br>
Earn : {{oppBonusRate | number:3}} / 1.00  <br> 

<br>
	 <br>
	
	 </div>
</div>
<div style=" display: inline-block; border-style: solid">
	<button ng-click="(hideOps=!hideOps)"> Show </button>
<table ng-show = "hideOps">
	<tr>
	<th>Issue
	</th>
	<th>Cost
	</th>
	<th>Count
	</th>
	</tr>
	<tr ng-repeat="types in opTypes">
		<td>{{types.name}}</td>
		<td>{{types.percentage}}</td>
		<td>0</td>
		
	</tr>
	</table>
	<table ng-show = "hideOps">
	<tr>
	<th>Issue
	</th>
	<th>Date
	</th>
	
	</tr>
	<tr ng-repeat="types in opLogs" ng-if="types.employeename == selectedEmployee['name']&& types.eventdate.substring(6,10)+types.eventdate.substring(0,2) ==selectdate">
		<td>{{types.problemtype}}</td>
		<td>{{types.eventdate}}</td>
		<td>0</td>
		
	</tr>
	</table>
	 <br>
	
	 </div>
</div>
<div id="ticks">
<div class="tick" style="height: 40px;"><p>100%</p></div>
<div class="tick" style="height: 40px;"><p>80%</p></div>
<div class="tick" style="height: 40px;"><p>60%</p></div>
<div class="tick" style="height: 40px;"><p>40%</p></div>
<div class="tick" style="height: 40px;"><p>20%</p></div>
</div>
		<!---<div ng-repeat="goallist in listofgoaltypes[201807]" style=" display: inline-block ; min-width:10vw; min-height:85%;  border-style: solid; ">
		<div style="height:120px; width:25px"></div>
		<div style="height:30px; width:25px"></div>
		<div style="height:70px; min-width:1vw"></div>
		
		
		</div>
		
			<div class="ng-scope" style=" display: inline-block ;  min-width:10vw; min-height:85%;  border-style: solid; "></div>
			<div style=" position: absolute">fgsdgd</div>--->
			
			</div>
			</body>
</html>