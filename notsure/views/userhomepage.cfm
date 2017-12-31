<html >
	<a >
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/notsure/#/Schedule">Schedule</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a href="/notsure/#/mtd">mtd</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/notsure/#/goalView">goalView</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/notsure/#/usersettings">userSettings</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/notsure/#/StoreGoals">Store Goals</a></li>
	</a>
</html>

