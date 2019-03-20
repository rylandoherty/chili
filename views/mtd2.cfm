<html>
<style>
	table {
    border-collapse: collapse;
}
.ui-datepicker-calendar {
        display: none;
        }
td {
    border: 1px solid black;
    height:5vh;
     text-align: center;
}
table{
	
	
	border: 1px solid black;
}
th{
	
	border: 1px solid black;
}


#door{
	float : right;
    
    
}
.tooltip {
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}
.tooltiptoo {
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 500px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}
.tooltip .tooltiptexttoo {
  visibility: hidden;
  width: 300px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 2;
}
.tooltiptoo:hover .tooltiptexttoo {
  visibility: visible;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>
<div ng-hide="mtdz['viewtype'] != 'Employee'">
	

<input  type="checkbox" ng-model="HideX" ng-checked="HideX">HideX</input>
</div>
<div>
  <input type="radio" ng-init="mtdz['viewtype'] = 'Employee'" ng-model="mtdz['viewtype']" value="Stores"> Stores</input>
  <input type="radio"  ng-model="mtdz['viewtype']" value="Employee"> Employee</input>
  <input type="radio"  ng-model="mtdz['viewtype']" ng-change="setDate(1)" value="CompareTwo"> Compare </input>
  <input type="radio"  ng-model="mtdz['viewtype']" ng-change="setDate(1)" value="CompareTwoStore"> StoreCompare </input><br>
  <button style=" min-height:30px; min-width:30px; max-width:30px; max-height:30px; background: url(../image/Refresh.png); background-size: 100% 100%; " ng-click = "load()">
		 </button>
	
	</div>
 <!---

 <input type="radio" ng-init="mtdz['datetype'] = 'MTD'" ng-change="setDate()" ng-model="mtdz['datetype']" value="LOAD"> Load</input>--->
 <span ng-hide="mtdz['viewtype'] != 'Employee' && mtdz['viewtype'] != 'Stores'">
 	<input type="radio"ng-model="mtdz['datetype']" ng-change="setDate(0)"  value="MTD"> {{returnMonthString(today.getMonth())}}</input>
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(0)" value="Today"> Today</input>
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(0)" value="Yesterday"> Yesterday</input>
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(0)" value="LW">LastWeek</input>
  <!---<input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate()" value="WBLW">2 Weeks Ago</input>--->
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(0)" value="LM">{{returnMonthString(today.getMonth()-1)}}</input>
  
			    <input autocomplete="off"  name="startDate" id="startDate" class="date-pickeraa"><button ng-click="updateDateValue()">loadDate</button><br/><br/>
			    
			    
  <!---<input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(0)" value="contest">1/28--1/31</input>--->
  
  <br>
  <span ng-if="mtdz['datetype']=='MTD'">	<input type="checkbox" ng-model="mtdz.showTrending" ng-checked="mtdz.showTrending">Trending <span ng-if="mtdz.showTrending">{{trendRate|number : 1}}</span></input>
  </span>
  <br/>
  <span ng-repeat=" formul in formulaGroups" ng-if="mtdz['viewtype'] == 'Stores'">
  	<input   type="checkbox" ng-model="formul.checked" >{{formul.name}}</input>
  	
  </span>
 </span> 
 <span ng-if="mtdz['viewtype'] == 'CompareTwo' || mtdz['viewtype'] == 'CompareTwoStore'">
  <br>
  
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(1)" value="MTD">This Month vs Last Month ( To Date )</input> <br>
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(1)" value="YTD">YTD vs Last YTD</input> <br>
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(1)" value="MTDVSLASTYEAR">This Year MTD vs Last Year MTD</input> <br>
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(1)" value="LW">Past 7 vs Week before</input> <br>
  <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate(1)" value="LM">{{returnMonthString(today.getMonth()-1)}} vs {{returnMonthString(today.getMonth()-2)}}</input>
  <br>
 </span> 
  <!---<input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate()" value="lastweek"> Past 7 Days</input>
   <input type="radio"  ng-model="mtdz['datetype']" ng-change="setDate()" value="Yesterday"> Yesterday</input>
    
    ---><br/>
    {{mtdz['datetype']}}
	<br/>         Uploaded:  {{uploadTime.filename.substr(20,46)}}
			
<span  ng-if="mtdz['viewtype'] == 'Stores'">
	
<table >
	 <col width="130">
  <col width="40">
  	 <col width="90">
  <col width="60">
  	 <col ng-repeat="formulas in groups" width="130" >

	<tr>
		<td >Name</td>
			
			<td ng-repeat="formulas in groups" class="tooltip"  ng-if="formulaGroups[formulas.VIEWGROUP.id].checked || (formulas.VIEWGROUP==undefined)" ng-style="{'background-color':formulas.color}">{{formulas.name}}
			<span class="tooltiptext">{{replaceFormula(formulas.formula)}}
			<br> Warning @ {{formulas.warningalert}}
			
			
			<ul>
				<li ng-repeat="skulist in formulas.groupsinformula" class="tooltiptoo">
					{{skulist.productgroupid}}
					<span class="tooltiptexttoo"><ul>{{actualGroups[skulist]}}
					<li ng-repeat="item in actualGroups[skulist.productgroupid].items">{{item.name}} as {{item.productSKU}}</li>
					</ul></span>
				</li>
			</ul>
			</span>
			</td>
		</tr>
	<tr >
		
			
  			 <td> District Sanat  </td>
			
			<td ng-repeat="formulas in groups" ng-if="formulaGroups[formulas.VIEWGROUP.id].checked || (formulas.VIEWGROUP==undefined)">
			<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'"> {{rightcontainer[mtdz.datetype].district.forms[formulas.name].value * trendRate| number: formulas.decimal}}</span>
			<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'"> {{rightcontainer[mtdz.datetype].district.forms[formulas.name].value | number: formulas.decimal}}</span>
			
			
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
  	 <col ng-repeat="formulas in groups "  ng-if="formulaGroups[formulas.VIEWGROUP.id].checked || (formulas.VIEWGROUP==undefined)" width="130" >

	<tr>
		<td >Name</td>
			
			<td ng-style="{'background-color':formulas.color}" ng-repeat="formulas in groups" ng-if="formulaGroups[formulas.VIEWGROUP.id].checked || (formulas.VIEWGROUP==undefined)">{{formulas.name}}</td>
		</tr>
	<tr ng-repeat="focus in rightcontainer[mtdz.datetype]['locationsort'] | orderBy: 'name'" >
		
			
  			<td>{{focus.name}}</td>
			
			
			<td  ng-repeat="formulas in groups" ng-if="formulaGroups[formulas.VIEWGROUP.id].checked || (formulas.VIEWGROUP==undefined)">
				<span ng-if="mtdz['datetype']=='MTD'">
				<span ng-if="formulas.trending && mtdz['datetype']=='MTD'">
					
					
					<span ng-if="formulas.warningalert > (focus.forms[formulas.name].value*trendRate)" style=" background-color: orange; color: black;">
						
						<span ng-if="mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span>
						</span>
						<span ng-if="!mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
						</span>
					</span>
					
					
					<span ng-if="formulas.belowaveragealert > (focus.forms[formulas.name].value*trendRate) && formulas.warningalert <= (focus.forms[formulas.name].value*trendRate)" style=" background-color: yellow; color: black;">
						<span ng-if="mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span>
						</span>
						<span ng-if="!mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
						</span>
					</span>
					<span ng-if="formulas.belowaveragealert <= (focus.forms[formulas.name].value*trendRate) || formulas.warningalert == null ">
						<span ng-if="mtdz.showTrending ">
							<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span>
						</span>
						<span ng-if="!mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
						</span>
					</span>
				</span>
				
				<span ng-if="!formulas.trending ||(formulas.trending && mtdz['datetype']!='MTD')">
					
					
					<span ng-if="formulas.warningalert > (focus.forms[formulas.name].value)" style=" background-color: orange; color: black;">
							<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
					</span>
					
					<span ng-if="formulas.belowaveragealert > (focus.forms[formulas.name].value) && formulas.warningalert <= (focus.forms[formulas.name].value)" style=" background-color: yellow; color: black;">
							<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
					</span>
					<span ng-if="formulas.belowaveragealert <= (focus.forms[formulas.name].value) || formulas.warningalert == null">
								<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
					</span>
				</span>
				</span>
				<span ng-if="mtdz['datetype']!='MTD'">
					<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'" > 
						<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span></span>
					<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'"> 
						<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span></span>
				</span>
				
				
				
				
				<!---<span ng-if="formulas.warningalert > focus.forms[formulas.name].value ">
					
					<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'" style=" background-color: yellow; color: black;"> 
						<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span></span>
					<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'" style=" background-color: yellow; color: black;"> 
						<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span></span>
				</span>
				
				
				<span ng-if="formulas.warningalert <= focus.forms[formulas.name].value || formulas.warningalert == null ">
				
				<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'"> 
					<span ng-if="!formulas.displayspercentage"> {{focus.forms[formulas.name].value*trendRate| number: formulas.decimal}} </span>
					<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span>
					</span>
				<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'"> 
					<span ng-if="!formulas.displayspercentage">{{focus.forms[formulas.name].value| number: formulas.decimal}}</span>
					<span ng-if="formulas.displayspercentage">{{focus.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
					</span>
			</span>--->
			
			</td>
			
  				
		
		
	</tr>
  		</table>
  		<br>
  		<br>
  		<br>
  		<span ng-repeat="focus in rightcontainer[mtdz.datetype]['locationsort'] | orderBy:'name'">
  			<div ng-click="selectedStore(focus.name)" ><button style="  font-size:24 ">{{focus.name}}</button></div>
  			<table ng-show="selectStore == 'all' || selectStore == focus.name ">
  				<col width="130">
  <col width="40">
  	 <col width="90">
  <col width="60">
  	 <col ng-repeat="formulas in groups" ng-if="formulaGroups[formulas.VIEWGROUP.id].checked || (formulas.VIEWGROUP==undefined)" width="130" >
  		<tr style="color:light-blue;">
			<td >Name</td>
			
			<td  ng-style="{'background-color':formulas.color}" ng-repeat="formulas in groups" ng-if="formulaGroups[formulas.VIEWGROUP.id].checked || (formulas.VIEWGROUP==undefined)">{{formulas.name}}</td>
		</tr>
		<tr ng-repeat ="emps in focus['employees']" ng-if="emps.cats['GrossProfit']['GP']>=100" >
			<td>{{emps.name}}</td>
			
			
			
			
			<td ng-repeat="formulas in groups" ng-if="formulaGroups[formulas.VIEWGROUP.id].checked || (formulas.VIEWGROUP==undefined)">
				
				<!---GP--->
				<span ng-if="mtdz['datetype']=='MTD'">
				<span ng-if="formulas.trending && mtdz['datetype']=='MTD'">
					
					
					<span ng-if="formulas.warningalert > (emps.forms[formulas.name].value*trendRate)" style=" background-color: orange; color: black;">
						
						<span ng-if="mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span>
						</span>
						<span ng-if="!mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
						</span>
					</span>
					
					
					<span ng-if="formulas.belowaveragealert > (emps.forms[formulas.name].value*trendRate) && formulas.warningalert <= (emps.forms[formulas.name].value*trendRate)" style=" background-color: yellow; color: black;">
						<span ng-if="mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span>
						</span>
						<span ng-if="!mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
						</span>
					</span>
					<span ng-if="formulas.belowaveragealert <= (emps.forms[formulas.name].value*trendRate) || formulas.warningalert == null ">
						<span ng-if="mtdz.showTrending ">
							<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span>
						</span>
						<span ng-if="!mtdz.showTrending">
							<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
						</span>
					</span>
				</span>
				
				<span ng-if="!formulas.trending ||(formulas.trending && mtdz['datetype']!='MTD')">
					
					
					<span ng-if="formulas.warningalert > (emps.forms[formulas.name].value)" style=" background-color: orange; color: black;">
							<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
					</span>
					
					<span ng-if="formulas.belowaveragealert > (emps.forms[formulas.name].value) && formulas.warningalert <= (emps.forms[formulas.name].value)" style=" background-color: yellow; color: black;">
							<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
					</span>
					<span ng-if="formulas.belowaveragealert <= (emps.forms[formulas.name].value) || formulas.warningalert == null">
								<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value| number: formulas.decimal}}</span>
							<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
					</span>
				</span>
				</span>
				<span ng-if="mtdz['datetype']!='MTD'">
					<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'" > 
						<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span></span>
					<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'"> 
						<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span></span>
				</span>
				
				
				<!---
				
				
				<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'">
					<span ng-if="formulas.warningalert > (emps.forms[formulas.name].value*trendRate)" style=" background-color: orange; color: black;">
						
					</span>
					<span ng-if="formulas.belowaveragealert > (emps.forms[formulas.name].value*trendRate) && formulas.warningalert <= (emps.forms[formulas.name].value*trendRate)" style=" background-color: yellow; color: black;">
						
					</span>
					<span ng-if="formulas.belowaveragealert <= (emps.forms[formulas.name].value*trendRate) ">
						
					</span>
					
				</span>
				
				<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'">
					
				</span>
				
				
				<span ng-if="formulas.warningalert > emps.forms[formulas.name].value ">
					
					
					<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'" style=" background-color: yellow; color: black;"> 
						<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span></span>
						
					<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'" style=" background-color: yellow; color: black;"> 
						<span ng-if="!formulas.displayspercentage">{{emps.forms[formulas.name].value| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span></span>
				</span>
				
				
				<span ng-if="formulas.warningalert <= emps.forms[formulas.name].value || formulas.warningalert == null ">
				
					<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'">
						<span ng-if="!formulas.displayspercentage"> {{emps.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
						<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*trendRate*100| number: formulas.decimal}}%</span>
						</span>
						
					<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'">
						<span ng-if="!formulas.displayspercentage"> {{emps.forms[formulas.name].value| number: formulas.decimal}} </span>
						<span ng-if="formulas.displayspercentage">{{emps.forms[formulas.name].value*100| number: formulas.decimal}}%</span>
						</span>
				</span>
			
				
				--->
				
				<!---<span ng-if="mtdz.showTrending && formulas.trending && mtdz['datetype']=='MTD'"> {{emps.forms[formulas.name].value*trendRate| number: formulas.decimal}}</span>
				<span ng-if="!mtdz.showTrending || !formulas.trending||mtdz['datetype']!='MTD'"> {{emps.forms[formulas.name].value| number: formulas.decimal}}</span>--->
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
			<th ng-repeat="currentView in mtdz['formulatoview']"  ng-click="mtdz.sortType = currentView['name']" ng-style="{'background-color':currentView.color}">{{currentView.name}}
			
			<span ng-if="!HideX">
				<button ng-click="removeFormula(currentView)">x</button>
			</span>
			</th>
			 
			<th><select ng-model="mtdz['formulaz']"   >
				
  				<option ng-repeat="beeps in groups" value="{{beeps.name}}" >{{beeps.name}}</option>
  
			</select><button ng-click="addFormulaToView(mtdz['formulaz'])">Add</button></th>
		</tr>
		<tr ng-repeat="emps in rightcontainer[mtdz['datetype']]['employees'] | orderBy: predicate:true " ng-if="emps['name']!='Rylan Doherty'">
			<td>{{emps['name']}}</td>
			<td  ng-repeat="currentView in mtdz['formulatoview']">
				<span ng-if="mtdz.showTrending && currentView.trending && mtdz['datetype']=='MTD'"> {{emps.forms[currentView['name']].value*trendRate| number: currentView.decimal}}</span>
				<span ng-if="!mtdz.showTrending || !currentView.trending||mtdz['datetype']!='MTD'"> {{emps.forms[currentView['name']].value| number: currentView.decimal}}</span>
				
				
			<td></td>
		</tr>
	</table>
	
</span>


<span ng-if="mtdz['viewtype'] == 'CompareTwo'">
	<br>Sort Type: {{mtdz.sortType}}
	
	
	<table >
		<tr>
			<th>Employee</th>
			<th ng-repeat="currentView in mtdz['formulatoview']"  ng-click="mtdz.sortType = currentView['name']" ng-style="{'background-color':currentView.color}"> <br>{{currentView.name}} </th>
			<span ng-if="!HideX">
				<button ng-click="removeFormula(currentView)">x</button>
			</span>
			</th>
			 
			<th><select ng-model="mtdz['formulaz']"   >
				
  				<option ng-repeat="beeps in groups" value="{{beeps.name}}" >{{beeps.name}}</option>
  
			</select><button ng-click="addFormulaToView(mtdz['formulaz'])">Add</button></th>
		</tr>
		<tr ng-repeat="emps in rightcontainer[mtdz['datetype']]['employees'] | orderBy: predicate:true " ng-if="emps['name']!='Rylan Doherty'">
			<td>{{emps['name']}}</td>
			<td  ng-repeat="currentView in mtdz['formulatoview']">
				<div style="">
				{{emps.forms[currentView['name']].value| number: currentView.decimal}}
				<br>
				<span style=" padding-left:5px; position: relative; float:left; bottom:100%; font-size:10 ">{{emps.forms[currentView['name']].value/rightcontainer[mtdz['datetype2']]['employeesbyname'][emps.name].forms[currentView['name']].value | number: currentView.decimal}}x<br>
				</span>
				<span style=" padding-right:10px; position: relative; float:right; bottom:100%; font-size:10 ">{{rightcontainer[mtdz['datetype2']]['employeesbyname'][emps.name].forms[currentView['name']].value | number: currentView.decimal}}<br>
					
				</span>
				</div>
			</td>
		</tr>
	</table>
	
</span>

<span ng-if="mtdz['viewtype'] == 'CompareTwoStore'">
	<br>Sort Type: {{mtdz.sortType}}
	
	
	<table >
		<tr>
			<th>Store</th>
			<th ng-repeat="currentView in mtdz['formulatoview']"  ng-click="mtdz.sortType = currentView['name']" ng-style="{'background-color':currentView.color}"> <br>{{currentView.name}} </th>
			<span ng-if="!HideX">
				<button ng-click="removeFormula(currentView)">x</button>
			</span>
			</th>
			 
			<th><select ng-model="mtdz['formulaz']"   >
				
  				<option ng-repeat="beeps in groups" value="{{beeps.name}}" >{{beeps.name}}</option>
  
			</select><button ng-click="addFormulaToView(mtdz['formulaz'])">Add</button></th>
		</tr>
		<tr ng-repeat="focus in rightcontainer[mtdz['datetype']]['locationsort'] | orderBy: predicate:true">
			<td>{{focus['name']}}</td>
			<td  ng-repeat="currentView in mtdz['formulatoview']">
				<div style="">
				{{focus.forms[currentView['name']].value| number: currentView.decimal}}
				<br>
				<span style=" border-style: solid; border-width: thin; padding-left:5px; position: relative; float:left; bottom:100%; font-size:10 ">{{focus.forms[currentView['name']].value/rightcontainer[mtdz['datetype2']]['locations'][focus.name].forms[currentView['name']].value | number: 2}}x<br>
				</span>
				<span style=" padding-right:10px; position: relative; float:right; bottom:100%; font-size:10 ">{{rightcontainer[mtdz['datetype2']]['locations'][focus.name].forms[currentView['name']].value | number: currentView.decimal}}<br>
					
				</span>
				</div>
			</td>
		</tr>
	</table>
	
</span>
</div>
</div>
</html>