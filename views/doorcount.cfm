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

<button ng-click="refreshCount()" >
	refresh
</button>
<table >
		
	<tr>
		<td  ng-repeat="focus in storeArray"  >
			<button  ng-click="onStoreChange(focus)"   >
  			<div style="font-size: 140%;">{{focus}}</div>
  		</button>		
		</td>
		
	</tr>
	<tr>
	
		<td  ng-repeat="focus in storeArray" >
			
  			<div>{{container.stores[focus].datecontainer[dateSelection].ClicksForDay}}</div>
  				
		</td>
		
	</tr>
  		</table>
  		
  		
<body style="width:40%;height:5%" >
	<button ng-click="changeMonthminus()"  style="float:left" >
		-1
	</button>
	<div style=" margin-right:50%">
		{{monthName}}
		<button ng-click="changeMonth()" style="float:right;top:100px" >
		+1
	</button>
	</div>
	
</body>
<body>
	<table >
		<font size="25"></font>
		<col width="130">
  		<col width="130">
  		<col width="130">
  		<col width="130">
  		<col width="130">
  		<col width="130">
  		<col width="130">
  		
		<tr>
			<td>
				Sun
			</td>
			<td>
				Mon
			</td>
			<td>
				Tu
			</td>
			<td>
				Wed
			</td>
			<td>
				Th
			</td>
			<td>
				Fri
			</td>
			<td>
				Sat
			</td>
		</tr>
		<tr ng-repeat="weeks in listOfWeeks">
			<td ng-repeat="days in weeks" style="height:80px" ng-click="selectDateWithCalander(days)" >
				<div  style=" position:relative; left:1px; top:-10px;">{{days.Date}}</div>
				<span ng-if='days.Date' >
					
				
				<div id="content"><div id ="door">{{container.stores[storeSelection].datecontainer[newDateString+""+days.Date.toString()].ClicksForDay}}</div><img id="door" src="../img/door.png" height="15" width="15" ></img></div>
				
				
				
					
				
				<!---<div ng-repeat="caty in categories">{{caty.categoryid}}-GP  {{container.stores[storeSelection].datecontainer[newDateString+""+days.Date.toString()]['stats'][caty.categoryid].GP}}<br/>
				{{caty.categoryid}}-QTY  {{container.stores[storeSelection].datecontainer[newDateString+""+days.Date.toString()]['stats'][caty.categoryid].QTY}}
					
				</div>--->
				</span>
			</td>
		</tr>
	</table>
	
	
  		<table >
  			
  		</table>
  		
	<div id="chartContainer">FusionCharts XT will load here!</div>
	  
    <body>
     <div id="includedContent"></div>
  </body>
<table >
	<tr>
	<th>
	#
</th>
<th >
	Time
</th>
<th >
	Type
</th>		
	</tr>

<button ng-click="switchDebuggingIndividualClicks()">
	Debug -- Show Clicks
</button>
<tr ng-repeat="clicks in doorCounts" ng-if="debugEm&&clicks['time'].toString().substring(0,8)==dateSelection&&clicks['location']==storeSelection"   >
	<td>
		{{clicks['iddoorcount']}}
	</td>
	<td>
		{{clicks['time'].toString().substring(8,13)}}
	</td>
	
	<td>
		{{clicks['type']}}
	</td>
</tr>
	
</table>




</body>

</div>
</div>
</html>