<body>
	
	<style>
		.ui-datepicker-calendar {
        display: none;
    }
		table {
 
		  border: 1px solid #000;
		}

th, td {
 
  text-align: left; 
  vertical-align: top; 
  border: 1px solid #000;
}
#donutchart1{
      margin-top: 98px;
    margin-left: 38%;
}
#donutchart2{
  margin-top: -225px;
    margin-left: 200px;
}
	</style>
	<script type="text/javascript">
     
      
    </script>
	
	<span style=" display: inline; float: left; min-width:75vw; max-width:75vw">
		<div>{{dog.testCF}}
		<button ng-click="calltest()">
			clicktest
		</button></div>
		<span style=" display: inline; float: left; min-width:35vh; max-width:35vh;">
				{{stuff.selectedview}}
				{{stuff.selectedDate}}
				<br/>
			<input type='radio' name='viewtype' ng-model="stuff.selectedview" value="List" ng-init="stuff.selectedview = 'List'">List
			<input type='radio' name='viewtype' ng-model="stuff.selectedview" value="Commission">Commission
			<input type='radio' name='viewtype' ng-model="stuff.selectedview" value="Spiff">Spiff
			<br/>
			
			<input type='radio' name='targettype' ng-model="stuff.targettype" value="Employees" ng-init="stuff.targettype = 'Employees'">Employees
			<input type='radio' name='targettype' ng-model="stuff.targettype" value="Stores">Stores
			<br/>
			<div ng-hide="stuff.selectedview != 'Commission'">
			<body >
			    <label for="startDate">Date :</label>
			    <input autocomplete="off" ng-blur="updateDateValue()" name="startDate" id="startDate" class="date-pick" />
			</body>
			<br/>
			<select ng-model="stuff.addingEmployee" ng-options="emp.name as emp.name for emp in stuff.newList | filter: greaterThan('accesslevel',0) |filter : 
			( ( !!stuff.selectedstore) || undefined) &&
			{ primarystorename : stuff.selectedstore }
			
			| filter :
			(   (!!stuff.selecteddistrict)|| undefined) &&
			 {districtname : stuff.selecteddistrict} 
			 
			| filter :
			(   (!!stuff.selectedregion)|| undefined) &&
			 {regionname : stuff.selectedregion} 
			 |filter :checkcommemps()
			 ">
				
			</select>
			
			<button ng-click="addCommissionableEmployee()">add</button>
			</div>
		</span>
		
		 
		
		
		<span style=" display: inline; float: left; min-width:25vh; max-width:25vh; ">
			<div  style=" font-size:20px">Sort</div>
			<span ng-hide="stuff.targettype != 'Employees'">
				<button ng-click="data.orderBy = sorts.bystore" ng-init="data.orderBy = sorts.bystore">
					By Store
				</button>
				<button ng-hide="stuff.selectedview != 'List'" ng-click="data.orderBy = sorts.active">
					By Activity
				</button>
			</span>
		</span>
		
		
		<span ng-hide="stuff.selectedview != 'Commission' || stuff.targettype != 'Employees'" style=" display: inline; float: left; min-width:25vh; max-width:25vh; ">
			<div  style=" font-size:20px">Copy</div>
			<span ng-hide="stuff.targettype != 'Employees'">
				
			Emp	<select ng-model="stuff.copyEmployee" ng-options="emp.name as emp.name for emp in userlist | filter: greaterThan('accesslevel',0)" >
				
				
			</select>
			</span>
			<span style=" display: inline; float: left; min-width:25vh; max-width:25vh; " ><button ng-click="copyToMonth()">To Month</button> </span>
			<div><body >
			    <label for="xDate">Date :</label>
			    <input autocomplete="off"  ng-blur="updateDateValue2()" name="xDate" id="xDate" class="date-pick" />
			</body>
			</div>
			</span>
			
		
		
		
		
	
	
	<span style=" display: inline; float: left; min-width:35vh; max-width:35vh;">
			Store :
			<select ng-model ="stuff.selectedstore" ng-options="x.storeid as x.storeid for x in stuff.locations.STORELIST"  >
				
				<option value=""></option>
				
			</select>
			<br/>
			District : 
			<select ng-model ="stuff.selecteddistrict" ng-options="x.districtid as x.districtid for x in stuff.locations.DISTRICTLIST"  >
				
				<option value=""></option>
				
			</select>
			<br/>
			Region :
			<select ng-model ="stuff.selectedregion" ng-options="x.regionid as x.regionid for x in stuff.locations.REGIONLIST"  >
				
				<option value=""></option>
				
			</select>
		</span>
		
	</span>
	
	<br/>
	<span style=" float: left; display: inline;">
		
		<div style=" min-width: 50vw; ">
		<table ng-if="stuff.selectedview == 'Commission' && stuff.targettype == 'Employees'" style = " float:left; display: inline;border-collapse:separate; border-spacing:0 15px">
			<tr>
			<th>User</th>
			<th>Store</th>
			<th>Month</th>
			<th>CommGroups</th>
			<th>SpiffGroups</th>
			
			</tr>
			<tr  ng-repeat = " users in userlist | orderBy: sorts.bystore
			
			|filter : 
			( ( !!stuff.selectedstore) || undefined) &&
			{ primarystorename : stuff.selectedstore }
			
			| filter :
			(   (!!stuff.selecteddistrict)|| undefined) &&
			 {districtname : stuff.selecteddistrict} 
			 
			| filter :
			(   (!!stuff.selectedregion)|| undefined) &&
			 {regionname : stuff.selectedregion} 
			 
			 
				" ng-if="users.accesslevel < 4 && users.accesslevel > 0 && users.COMZ != 0">
				<td nowrap>{{users.name}} <button ng-click="copyToEmployee(users.COMZ,stuff.commissiongroupid)"> CopyTo </button></td>
				<td nowrap>{{users.primarystorename}}</td>
				<td nowrap>{{users.COMZ.month}} {{users.COMZ.year}}</td>
				
				<td><br/><div ng-click="selectCommGroup(paytype); stuff.copyEmployee = users.name" ng-repeat="paytype in users.COMZ.GROUPS" >{{paytype.name}}</div>
				<button ng-click="createNewCommGroup(users)">+</button></td>
				<td><br/><div ng-click="selectCommSpiffGroup(paytype)" ng-repeat="paytype in users.COMZ.GROUPS" >{{paytype.name}}</div>
				<button ng-click="createNewCommSpiffGroup(users)">+</button></td>
				
				
				
			</tr>
			
		</table>
		
		<span style=" float: left; display: inline; min-width: 25vw; min-height:40vh" ng-if="stuff.selectedview == 'Commission' && stuff.targettype == 'Employees' && stuff.commissiongroupid">
		<span>ID : {{stuff.commissiongroupid}}</span><br/>
		
		<span>Name :<input ng-model="stuff.newName" > </span><br/>
		<span>Base%  :<input  ng-model="stuff.basepercent"  > </span><br/>
		
		<span>target  : <select ng-model="stuff.selectedTargetType"  >
			 <option value="Self">Self</option>
			 <option ng-repeat= "stores in stuff.locations.STORELIST" value="{{stores.storeid}}">{{stores.storeid}}</option>
			  </select>
			  </span><br/>
		<span>Draw Opt  :<select ng-model="stuff.drawtype" > <option value="Hourly">-Hourly</option><option value="Dollar">-Amount$</option> <option value="None">None</option> </select> </span><br/>
		<span ng-hide="stuff.drawtype != 'Dollar'">Draw Value<input ng-model="stuff.drawvalue"><br/> </span>
		<button ng-click="updateCommGroup()"> update </button>
		<button ng-click="duplicateCommGroup()"> duplicate </button>
		<br/>
		<Button ng-click = "deleteCommGroup()">Delete</Button>
		<button ng-click="createNewCommType()"> addFormula </button> <select ng-model="stuff.selectedFormulaToAdd" ng-options="formu.id as formu.name for formu in stuff.formulalist"><option value=""></option></select>
		<br/>
		<span ng-repeat="forms in stuff.wholeCommGroup.FORMULAS">{{forms.FORMULA.name}}<br/>
		<span>% Growth  :<select ng-model="forms.bonusratetype" ng-change="updateCommType(forms)" > <option value="Tier">Tier</option><option value="Gradual">Gradual</option> </select> </span><br/>
		<Button ng-click = "deleteCommType(forms)">Delete</Button>
		
  <!---
  <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Delete</button>
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Delete {{forms.FORMULA.name}}</h4>
        </div>
        <div class="modal-body">
          <p>Are you sure?</p>
        </div>
        <div class="modal-footer">
        	<button type="button" class="btn btn-default" data-dismiss="modal" ng-click="deleteCommType(forms)">Yes</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
        </div>
      </div>
      
    </div>
 
  
</div>
  <!-- Modal -->
 --->
		<table> 
			<tr><th>Pay</th><th>Work</th><th>Update</th></tr>
			<tr ng-repeat="peg in forms.PEGS"><td><input ng-model="peg.bonus"></td><td><input ng-model="peg.value"></td><td><button ng-click="updatePeg(peg)">Update</button></td></tr>
			<tr><td><input ng-model="forms.newpay"> </td><td><input ng-model="forms.newwork"></td></tr>
		</table>
		
		
		<button ng-click = "createCommPeg(forms)">Add Peg</button>
		<br/><br/><br/>
		</span>
		</span>
		
		
		<table ng-if="stuff.selectedview == 'List' && stuff.targettype == 'Stores' " style = "float:left;border-collapse:separate; border-spacing:0 15px">
			<tr>
				<th>Store</th>
				<th>District</th>
				<th>Region</th>
			</tr>
			<tr ng-repeat= "stores in stuff.locations.STORELIST">
				<td nowrap>{{stores.storeid}}</td>
				<td nowrap>{{stores.DISTRICTID}}</td>
				<td nowrap>{{stores.REGIONID}}</td>
			</tr>
		</table>
		
		
		
		
		<table ng-if="stuff.selectedview == 'List' && stuff.targettype == 'Employees'" style = "border-collapse:separate; border-spacing:0 15px">
			<tr>
			<th>User</th>
			<th>Store</th>
			<th>District</th>
			<th>Region</th>
			<th>Access</th>
			<th>HireDate</th>
			<th>Last Active</th>
			<th>EroesId</th>
			
			</tr>
			<tr  ng-repeat = " users in userlist | orderBy:data.orderBy 
			
			|filter : 
			( ( !!stuff.selectedstore) || undefined) &&
			{ primarystorename : stuff.selectedstore }
			
			| filter :
			(   (!!stuff.selecteddistrict)|| undefined) &&
			 {districtname : stuff.selecteddistrict} 
			 
			| filter :
			(   (!!stuff.selectedregion)|| undefined) &&
			 {regionname : stuff.selectedregion} 
			 
			 
				" ng-if="users.accesslevel < 4 && users.accesslevel > -1 ">
				<td nowrap>{{users.name}}</td>
				<td nowrap>{{users.primarystorename}}</td>
				<td nowrap>{{users.districtname}}</td>
				<td nowrap>{{users.regionname}}</td>
				<td nowrap >
					<div style="display: inline;">
						{{users.accesslevel}}
					</div>
					
					<div style=" display: inline;  ">
						<input style="max-width:25px" ng-blur="accesslevelchange(users.userid, users.level);" ng-model = "users.level" value="users.accesslevel" ></input>
					</div>
					
					<div style="display: inline; ">
						<button style="max-width:25px;" ng-click="accesslevelchange(users.userid, -99);" > X </button>
					</div>
					
				</td>
				<td nowrap>{{users.hiredate}}</td>
				<td nowrap>{{users.lastactive}}</td>
				<td nowrap>{{users.eroesid}}</td>
				
			</tr>
			
		</table>
	</span>
</body>

 