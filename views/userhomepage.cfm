<html >
	<div ng-click="deleteCookie()">
					-- Logout
				</div>
	<a >
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/#/Schedule">Schedule</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a href="/#/mtd">Month Sales Report[MTD]</a></li>
		<li ng-if="thisGuy.accesslevel<=-1"><a ng-click="addarrayOfLocations()" href="/#/goalView">Commission/Draw</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/#/Draw">DrawDetails</a></li>
		<li ng-if="thisGuy.accesslevel<=-1"><a ng-click="addarrayOfLocations()" href="/#/StoreGoals">Store Goals Progress</a></li>
		<li ng-if="thisGuy.accesslevel<=-1"><a ng-click="addarrayOfLocations()" href="/#/ActError">Activation Error</a></li>
		<li ng-if="thisGuy.accesslevel<=-1"><a ng-click="addarrayOfLocations()" href="/#/UsedPhoneCheck">Used Phones / Return Checklist</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/#/LogRecord">Log Record</a></li>
		<li ng-if="thisGuy.accesslevel<=-1"><a ng-click="addarrayOfLocations()" href="/#/DoorCount">DoorCount</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/#/Links">Important Links</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/#/CallList">Customer Call List</a></li>
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/#/MonthlyGoals">BYB</a></li>
		<br>
		
		<li ng-if="thisGuy.accesslevel<=3"><a ng-click="addarrayOfLocations()" href="/#/usersettings">Change Password</a></li>
	</a>
</html>

