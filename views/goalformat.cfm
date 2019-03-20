<html >

<button ng-click="hidegoalformat = false" >
	f
</button>
<button ng-click="hidegoalformat = true">
	t
</button>
<span ng-if="hidegoalformat">
	

	<button ng-click="creategoalformatgroup(newgoalformatname)" >
		New Goal Format Group
	</button>
	<input ng-model="newgoalformatname"></input>
	{{newgoalformatname}}
	<table>
		<tr>
			<th>
				Name
			</th>
			<th>
				Select
			</th>
			<th>
				Delete
			</th>
		</tr>
		<tr ng-repeat="gf in goalformatgrouplist" > 
		<td>{{gf.name}}</td>
		
		<td><input ng-model="selected" type="checkbox" ng-click="setSelected(gf)"></input></td>
		<td><button ng-click="deletegoalformatgroup(gf.id)" >
		Goal Format Delete
	</button></td>
		</tr>
	</table>
	

	<button ng-click="creategoalformat()" >
		New Goal Format
	</button>
	<table>
		<tr>
			<th>
				Name
			</th>
			<th>
				Percent Payed
			</th>
			<th>
				progress
			</th>
		</tr>
		
		
		<tr ng-repeat="gf in selected['format']" > 
		<td>{{gf.id}}</td>
		<td><input ng-model="percentpayed" ng-value="{{gf.percentpayed}}" ></input><button ng-click="setgoalformatpercentpayed(gf.id,percentpayed)">$%</button></td>
		<td><input ng-model="progress" ng-value="{{gf.progress}}" ></input><button ng-click="setgoalformatprogress(gf.id, progress)">%</button></td>
		<td><button ng-click="deletegoalformat()" >
		Goal Format Delete
	</button></td>
		</tr>
	</table>
	</span>
	<button ng-click="hidegoalstore = false" >
	Stores Off
</button>
<button ng-click="hidegoalstore = true">
	Stores on
</button>
<span ng-if="hidegoalstore">
	<button ng-click="creategoalstore(f)" >
		New Store Goal 
	</button>
	
	<table>
		<tr>
			
				
		<th>name</th>
		<th>Store</th>
		<th>Month</th>
		<th>Year</th>
		<th>Cash</th>
		<th>Goal</th>
		<th>Goal Format</th>
		<th>Formula List</th>
		</tr>
		<tr>
			<td><input ng-model="f.name"></input></td>
			<td><select ng-model="f.stores" >
  				<option ng-repeat="store in stores" value="{{store.storeid}}" >{{store.storeid}}</option>
  
			</select></td>
			<td><input ng-model="f.month" ></input></td>
			<td> <input ng-model="f.year" ></input></td>
			<td> <input ng-model="f.cash"> </input></td>
			<td> <input ng-model="f.quantity"> </input></td>
					<td><select ng-model="f.goalformatgroup">
  				<option ng-repeat="formats in goalformatgrouplist" value="{{formats.id}}" >{{formats.name}}</option>
  
			</select></td>
					<td><select ng-model="f.formulalist" >
  				<option ng-repeat="formula in groups" value="{{formula.id}}" >{{formula.name}}</option>
  
			</select></td>
			
			
		</tr>
	</table>
	
	
	
	
	<td></td>
	
	
	
	<input ng-model="filt"></input>Month
	<table>
		<tr>
			<th></th>
		<th>name</th>
		<th>Store</th>
		<th>Month</th>
		<th>Year</th>
		<th>Cash</th>
		<th>Goal</th>
		<th>Goal Format</th>
		<th>Formula List</th>
		<th>Delete</th>
		</tr>
		<tr  ng-repeat="fd in goalstorelist" ng-if="fd.month==filt">
			<td><input type="radio" ng-model="g.a" ng-value="{{fd}}"></input></td>
			<td>{{fd.name}}</td>
			<td>{{fd.stores.storeid}}</td>
			<td>{{fd.month}}</td>
			<td>{{fd.year}} </td>
			<td><input ng-change="setgoalcash(fd)" ng-model="fd.cash"></td>
			<td><input ng-change="setgoalquantity(fd)" ng-model="fd.quantity"></td>
			<td><select ng-change="setgoalformatgroup(fd)" ng-model="fd.goalformatgroup"  value="fd.goalformatgroup.name" >
				
  				<option ng-repeat="formats in goalformatgrouplist" value="{{formats.id}}" >{{formats.name}}</option>
  
			</select></td>
			<td>{{fd.goalformatgroup.name}}</td>
			<td>{{fd.formulalist.name}}</td>
			
			<td><button ng-click="deletegoalstore(fd.id)">Delete</button></td>
			
		</tr>
	</table>
	Their GP {{container[district]['stores'][g.a.stores.storeid]['sales']['formulagroup'][g.a.formulalist.name]}}
	
	{{g.a.formulalist.name}}
     {{g.a.stores.storeid}}
     {{g.a.truepercent}}
     <div ng-repeat = "thing in g.a.format">{{(g.a.cash*thing.percentpayed/100)/(g.a.quantity*thing.progress/100)| number :3}}---{{g.a.quantity*thing.progress/100}}</div>
</span>
</html>