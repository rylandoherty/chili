<html >
	<a >
		<div>

			<cfoutput >

				<div>Version: {{'#Session.version#'}}</div>
  	</cfoutput>

		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/Upload">Upload</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/UserList">UserListManager</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/Schedule">Schedule</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/Manager">Manager</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/ProductGroups">ProductGroups</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/formulaproductgroup">formulaproductgroup</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/mtd">mtd</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/goalformat">goalformat</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/goalView">Commission/Draw</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/MonthlyGoals">Monthly Goals</a></li>
		<li ng-if="thisGuy.accesslevel<=1"><a ng-click="addarrayOfLocations()" href="/notsure/#/StoreGoals">Store Goals</a></li>
  </div>


	</a>
</html>