
<html>
	Save Information to the database <br>
	<input ng-model = "settings.recordone" type=" number" > </input>
	<input type="password" ng-model = "settings.recordtwo"> </input><br>
	<button ng-click="saveThis()" > Submit </button> 
	{{settings.status}}<br>
	{{settings.lastupdate}}--{{settings.encrypt}}<br><br>
	<div ng-if="thisGuy.accesslevel <= 1 || thisGuy.userid == 'Jailene Laureano'">
	
	<button ng-click="loadlogrecord()"> Load
	</button>
	{{settings.thisCode}} {{settings.thisCodeTwo}} {{settings.thisUser}} 
	</div> 
</html>



