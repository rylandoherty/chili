<body>
	<style>
		table {
  width: 25%;
  border: 1px solid #000;
}

th, td {
  width: 25%;
  text-align: left; 
  vertical-align: top; 
  border: 1px solid #000;
}
	</style>
	<button ng-click="backarrayOfLocations('/Manager')" ng-init="count = 0" >
		Back
	</button>
	
	<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/UserList">Admin</a></li>
	<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/Manager">Manager</a></li>
	
	{{userList}}
	<table >
		<th>
			User
		</th>
		<th>
			Draw
		</th>
		<th>
			Pay
		</th>
		<th>
			GP
		</th>
		<th>
			Cost
		</th>
		<th>
			Effc.
		</th>
		<tr ng-repeat="users in userArray | orderBy: '-gp'" >
			<td >
				{{users.name}}
			</td>
			<td >
				{{users.draw | number : 2}}
			</td>
			<td>
				{{users.sum|number: 2}}
			</td>
			<td>
				{{users.gp|number:0}}
			</td>
			<td>
				
				{{users.sum/users.gp | number : 2}}
			</td>
			<td>
				
				{{users.draw/users.gp | number : 2}}
			</td>
		</tr>
	</table>
	
	
</body>